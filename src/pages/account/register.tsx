import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { AuthContext } from '@/context/auth';
import { LoginContainer } from '@/styles/pages/Login';
import { ButtonContainer } from '@/styles/components/Button';

const schema = yup.object({
  userName: yup.string().required('Esse campo é obrigatório'),
  email: yup.string().email('Insira um e-mail válido').required('Esse campo é obrigatório'),
  password: yup.string().required('Esse campo é obrigatório').min(6, 'A senha deve possuir ao menos 6 caracteres'),
}).required();
type LoginFormData = yup.InferType<typeof schema>;

export default function Login() {
  const router = useRouter()
  const { handleCreateAccount, handleLogin } = useContext(AuthContext)

  const { register, handleSubmit, formState:{ errors, isSubmitting, isValid } } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  async function handleLoginSubmit(data: LoginFormData) {
    const accountCreationWasSuccessful = await handleCreateAccount(data)
    if (accountCreationWasSuccessful) {
      const loginWasSuccessful = await handleLogin(data)
      if (loginWasSuccessful) {
        router.push('/')
      }
      else {
        router.push('/account/login')
      }
    }
    else {
      alert('Ocorreu um erro na geração da conta, verifique seus dados e tente novamente mais tarde')
    }
  }

  return (
    <LoginContainer>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(handleLoginSubmit)}>
          <div>
            <label htmlFor='userName'>Nome:</label>
            <input {...register('userName')} className={errors.userName && 'wrong'}/>
            <p>{errors.userName?.message}</p>          
          </div>
          <div>
            <label htmlFor='email'>E-mail:</label>
            <input {...register('email')} className={errors.email && 'wrong'}/>
            <p>{errors.email?.message}</p>          
          </div>
          <div>
            <label htmlFor='password'>Senha:</label>
            <input {...register('password')} type='password' className={errors.password && 'wrong'}/>
            <p>{errors.password?.message}</p>          
          </div>
          <ButtonContainer
            type='submit'
            disabled={isSubmitting || !isValid}
            style={{borderRadius: 10}}
          >
            Criar Conta
          </ButtonContainer>
        </form>
        <Link href='/account/login'>Já possui uma conta? Faça Login.</Link>
      </div>

      <div>
        <Image
          src='https://images.unsplash.com/photo-1528712306091-ed0763094c98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=440&q=80'
          alt=''
          width={560}
          height={620}
        />
      </div>
    </LoginContainer>
  )
}
