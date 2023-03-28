import { useContext } from 'react';
import { useRouter } from 'next/router';

import { AuthContext } from '@/context/auth';
import { AccountContainer } from '@/styles/pages/Account';
import { ButtonContainer } from '@/styles/components/Button';

export default function Account() {
  const router = useRouter()
  const { isLoggedIn, user, handleSignOut } = useContext(AuthContext)

  if (!isLoggedIn) router.push('/account/login')

  function handleSignOutClick() {
    handleSignOut()
    router.push('/account/login')
  }

  return (
    <AccountContainer>
      {isLoggedIn && (
        <>
          <h1>Bem-vindo {user.userName}!</h1>
          <ButtonContainer style={{width: '20rem', borderRadius: 10}} onClick={() => handleSignOutClick()}>
            Sair
          </ButtonContainer>        
        </>
      )}    
    </AccountContainer>
  )
}
