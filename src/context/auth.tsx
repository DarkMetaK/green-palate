import { useEffect, useState, createContext, ReactNode } from 'react';
import {v4 as uuidv4} from 'uuid';
import { api } from '../services/api';

interface ILoginData {
  email: string,
  password: string
}

interface IAccountDataToCreateAccount {
  id?: string,
  userName: string,
  email: string,
  password: string
}

interface IUser {
  id: string,
  userName: string,
  email: string,
  password: string
}

interface IUserPersistedInfo {
  userName: string,
  email: string,
  id: string
}

interface IAuthContext {
  user: IUserPersistedInfo,
  isLoggedIn: boolean,
  setIsLoggedIn: (isLoggedIn: boolean) => void,
  handleCreateAccount: (accountData: IAccountDataToCreateAccount) => Promise<boolean>,
  handleLogin: (loginData: ILoginData) => Promise<boolean>,
  handleSignOut: () => void
}

interface IAuthContextProvider {
  children: ReactNode
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({children}: IAuthContextProvider) => {
  const [user, setUser] = useState<IUserPersistedInfo>({} as IUserPersistedInfo)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  
  useEffect(() => {
    const storage = localStorage.getItem('greenpalateLogin')
    if(storage) {
      const { login, user } = JSON.parse(storage)
      setIsLoggedIn(login)
      setUser(user)
    }
  }, [])

  async function handleCreateAccount(accountData: IAccountDataToCreateAccount) {
    try {
      // Verify if email already exists
      const { data } = await api.get(`/accounts?email=${accountData.email}`)
      if(data.length !== 0) {
        return false
      } 
      else {
        accountData.id = uuidv4()
        const response = await api.post('accounts', JSON.stringify(accountData), 
        {
          headers: {'Content-Type': 'application/json'}
        })

        if(response.status === 201) {
          return true
        }
        else {
          return false
        }
      }
    }
    catch(error) {
      alert('Houve algum erro!')
      console.log(error)
    }
    return false
  }

  async function handleLogin(loginData: ILoginData) {
    try{
      const { data } = await api.get<Array<IUser>>(`accounts?email=${loginData.email}&password=${loginData.password}`)
      if(data.length) {
        const info = {userName: data[0].userName, email: data[0].email, id: data[0].id}

        localStorage.setItem('greenpalateLogin', JSON.stringify({
          login: true,
          user: info
        }))

        setUser(info)
        setIsLoggedIn(true)
        return true
        } 
        else {
          return false
        }
      }
      catch(error) {
        alert('Houve algum erro!')
        console.log(error)
      }
    return false
  }

  function handleSignOut() {
    localStorage.removeItem('greenpalateLogin')
    setUser({} as IUserPersistedInfo)
    setIsLoggedIn(false)
  }

  return <AuthContext.Provider value={{
    user,
    isLoggedIn,
    setIsLoggedIn,
    handleCreateAccount,
    handleLogin,
    handleSignOut
  }}>
    {children}
  </AuthContext.Provider>
}