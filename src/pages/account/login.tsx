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
  email: yup.string().email('Insira um e-mail válido').required('Esse campo é obrigatório'),
  password: yup.string().required('Esse campo é obrigatório'),
}).required();
type LoginFormData = yup.InferType<typeof schema>;

export default function Login() {
  const router = useRouter()
  const { handleLogin } = useContext(AuthContext)

  const { register, handleSubmit, formState:{ errors, isSubmitting, isValid } } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  async function handleLoginSubmit(data: LoginFormData) {
    const loginWasSuccessful = await handleLogin(data)
    if (loginWasSuccessful) {
      router.push('/')
    }
    else {
      alert('E-mail ou senha inválidos!')
    }
  }

  return (
    <LoginContainer>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(handleLoginSubmit)}>
          <div>
            <label htmlFor='email'>E-mail:</label>
            <input {...register('email')} className={errors.email && 'wrong'}/>
            <p>{errors.email?.message}</p>          
          </div>
          <div>
            <label htmlFor='password'>Senha:</label>
            <input {...register('password')} className={errors.password && 'wrong'} type='password'/>
            <p>{errors.password?.message}</p>          
          </div>
          <ButtonContainer
            type='submit'
            disabled={isSubmitting || !isValid}
            style={{borderRadius: 10}}
          >
            Entrar
          </ButtonContainer>
        </form>
        <Link href='/account/register'>Ainda não tem uma conta? Cadastre-se.</Link>
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
