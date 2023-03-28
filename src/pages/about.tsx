import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { AboutContainer, ContactForm, MissionContainer, ProfilePictures, WhoWeAreContainer } from '@/styles/pages/About';

import EduardoProfilePicture from '../assets/quemSomos/eduardo.png';
import CamilaProfilePicture from '../assets/quemSomos/camila.png';
import FatimaProfilePicture from '../assets/quemSomos/fatima.png';
import FernandaProfilePicture from '../assets/quemSomos/fernanda.png';
import { ButtonContainer } from '@/styles/components/Button';

const schema = yup.object({
  name: yup.string().required('Esse campo é obrigatório'),
  email: yup.string().email('Insira um e-mail válido').required('Esse campo é obrigatório'),
  message: yup.string().required('Esse campo é obrigatório'),
}).required();
type ContactFormData = yup.InferType<typeof schema>;

export default function About() {
  const { register, handleSubmit, formState:{ errors, isSubmitting, isValid }, reset } = useForm<ContactFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  function handleMessageSubmit() {
    alert('Mensagem enviada')
    reset()
  }

  return (
    <>
      <AboutContainer>
        <div>
          <h1>Sobre</h1>
          <p>Estudos apontam que ser vegano traz benefícios para a saúde e promove uma vida longeva! Agora com um grupo de amigos pra te apoiar ficou ainda mais fácil!</p>
        </div>
          <Image
            src='https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'
            alt=''
            width={460}
            height={520}
          />
      </AboutContainer>
      <WhoWeAreContainer>
        <div className='info'>
          <h2>Quem Somos</h2>
          <p>A GreenPalate é uma <b>startup</b> que tem como objetivo tornar a <b>alimentação</b> vegana mais <b>acessível</b> e fácil de seguir para pessoas que desejam adotar um estilo de vida mais <b>saudável</b> e <b>sustentável</b>. A empresa foi fundada por um grupo de amigos apaixonados por culinária e bem-estar.</p>
        </div>
        <ProfilePictures>
          <div className='user'>
            <Image
              src={EduardoProfilePicture}
              alt=''
              width={260}
              height={260}
            />
            <p className='name'>Eduardo Silva</p>
            <p className='position'>Diretor Executivo (CEO)</p>
          </div>
          <div className='user'>
            <Image
              src={FatimaProfilePicture}
              alt=''
              width={260}
              height={260}
            />
            <p className='name'>Fátima Cardoso</p>
            <p className='position'>Diretora de Marketing</p>
          </div>
          <div className='user'>
            <Image
              src={CamilaProfilePicture}
              alt=''
              width={260}
              height={260}
            />
            <p className='name'>Camila Castellotti</p>
            <p className='position'>Diretora Financeira</p>
          </div>
          <div className='user'>
            <Image
              src={FernandaProfilePicture}
              alt=''
              width={260}
              height={260}
            />
            <p className='name'>Fernanda Ribeiro</p>
            <p className='position'>Diretora de Tecnologia</p>
          </div>
        </ProfilePictures>
      </WhoWeAreContainer>
      <MissionContainer>
        <h2>M<br/>I<br/>S<br/>S<br/>Ã<br/>O</h2>
        <div>
          <div className='mission'>
            <h3>Conectar Pessoas</h3>
            <p>Sabemos quão complicada pode ser a jornada do veganismo, e é por isso que desejamos criar um ambiente amigável, onde a comunidade se ajuda e compartilha dicas e receitas deliciosas!</p>
          </div>
          <div className='mission'>
            <h3>Promover Veganismo</h3>
            <p>Para demonstrar que o veganismo é sim para todos, trazemos desde receitas simples até receitas mais complexas, que fazem bem para o bolso e para a saúde.</p>
          </div>
          <div className='mission'>
            <h3>Sustentabilidade</h3>
            <p>Veganimo é muito mais do que uma dieta, é um estilo de vida. Por isso promovemos a sustentabilidade, fornecendo dicas para reaproveitar alimentos e outras estratégias eco-friendly.</p>
          </div>
        </div>
      </MissionContainer>
      <ContactForm>
        <div>
          <h2>Contato</h2>
          <form onSubmit={handleSubmit(handleMessageSubmit)}>
            <div>
              <label htmlFor='name'>Nome</label>
              <input {...register('name')} type='text' placeholder='Seu nome' className={errors.name && 'wrong'}/>
              <p>{errors.name?.message}</p>
            </div>
            <div>
              <label htmlFor='email'>E-mail</label>
              <input {...register('email')} type='email' placeholder='contato@gmail.com' className={errors.email && 'wrong'}/>
              <p>{errors.email?.message}</p>
            </div>
            <div>
              <label htmlFor='message'>Mensagem</label>
              <textarea {...register('message')} placeholder='O que você precisa?' rows={8} className={errors.message && 'wrong'}></textarea>
              <p>{errors.message?.message}</p>
            </div>
            <ButtonContainer
              style={{borderRadius: 5, alignSelf: 'flex-start', padding: '1rem 2rem'}}
              disabled={isSubmitting || !isValid}
              >
                Enviar Mensagem
              </ButtonContainer>
          </form>
        </div>
      </ContactForm>
    </>
  )
}