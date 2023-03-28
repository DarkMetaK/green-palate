import { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ThumbsUp, ThumbsDown } from 'phosphor-react';
import {v4 as uuidv4} from 'uuid';
import { api } from '@/services/api';

import { AuthContext } from '@/context/auth';

import { ButtonContainer } from '@/styles/components/Button';
import { CommentsSection, CommentItem } from '@/styles/components/Comments';

interface IAccount {
  id: string,
  email: string,
  password: string,
  userName: string,
  profilePicture: string
}

interface IComments {
  id: string,
  accountsId: string,
  recipeId: string,
  text: string,
  accounts : IAccount
}

interface ICommentsProps {
  recipeId: string
}

export function Comments({recipeId}: ICommentsProps) {
  const { isLoggedIn, user } = useContext(AuthContext)
  const [comments, setComments] = useState<IComments[]>([])

  useEffect(() => {
    async function retrieveData() {
      try {
        const response = await (await api.get(`/comments?recipeId=${recipeId}&_expand=accounts`)).data
        setComments(response)
      }
      catch (error) {
        console.log(error)
      }      
    }
    retrieveData()
  }, [recipeId]);

  async function handleSubmitComment(data: CommentFormData) {
    if (isLoggedIn) {
      const info = {
        id: uuidv4(),
        recipeId: recipeId,
        accountsId: user.id,
        text: data.text
      }
      try {
        const response = await api.post(`/comments`, info)
        const newComment = {
          ...response.data,
          accounts: {
            userName: user.userName
          }
        }
        setComments(state => [...state, newComment])
        reset()
      }
      catch(error) {
        alert('Houve algum erro!')
        console.log(error)
      }
    }
    else {
      alert('É necessário estar logado para comentar')
    }
  }

  const schema = yup.object({
    text: yup.string().required('Esse campo é obrigatório'),
  }).required();
  type CommentFormData = yup.InferType<typeof schema>;

  const { register, handleSubmit, formState:{ isSubmitting, isValid }, reset } = useForm<CommentFormData>({
    resolver: yupResolver(schema),
  });

  return (
    <CommentsSection>
    <div>
      <h2>Comentários</h2>
      <form onSubmit={handleSubmit(handleSubmitComment)}>
        <input type='text' placeholder='Escreva aqui seu comentário' {...register('text')} required/>
        <ButtonContainer
          style={{
            borderRadius: 0,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            width: '10rem'
          }}
          disabled={isSubmitting || !isValid}
        >
          Enviar
        </ButtonContainer>
      </form>
      <div className='comments'>
        {comments?.length ? comments.map(item => 
        <CommentItem key={item.id}>
          <Image
            src={item.accounts?.profilePicture || 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'}
            alt=''
            width={60}
            height={60}
          />
          <div>
            <div className='info'>
              <p className='author'>{item.accounts.userName}</p>
              <div className='buttons'>
                <button><ThumbsUp size={16}/></button>
                <button><ThumbsDown size={16}/></button>
              </div>
            </div>
            <p>{item.text}</p>
          </div>
        </CommentItem>) : <p className='notFound'>Seja o primeiro a comentar!</p>}
      </div>
    </div>
  </CommentsSection>
  )
}