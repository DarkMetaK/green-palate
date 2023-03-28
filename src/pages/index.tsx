import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { api } from '../services/api';

import { SearchInput } from '@/components/SearchInput';
import { RecipeCategorySelector } from '@/components/RecipeCategorySelector';
import { ButtonContainer } from '@/styles/components/Button';
import { StoreCategorySelector } from '@/components/StoreCategorySelector';
import { ProductDisplay } from '@/components/ProductDisplay';
import { HomeContainer, PostsContainer, StoreContainer } from '@/styles/pages/Home';

interface IHome {
  recipesResumed: {
    id: string,
    title: string,
    imageUrl: string,
    ratings: {userId: number, rate: number}[],
    portions: number,
    requiredTime: number,
    category: string,
    slug: string
  }[],
  postsResumed: {
    id: string,
    title: string,
    imageURL: string,
    date: string,
    slug: string
  }[],
  topProducts: {
    id: string,
    imageURL: string,
    name: string,
    price: number,
    link: string
  }[]
}

export default function Home({recipesResumed, postsResumed, topProducts}: IHome) {
  const router = useRouter()

  return (
    <>
    <Head>
      <title>GreenPalate</title>
    </Head>
    
    <div>
      <HomeContainer>
        <SearchInput />

        <RecipeCategorySelector recipesResumed={recipesResumed}/>

        <PostsContainer>
          <h2>Últimos Posts</h2>
            {postsResumed.length ?
              (
              <>
              <div className='posts'>
                {
                postsResumed.map(item => (
                  <Link href={`/blog/post/${item.slug}`} key={item.id}>
                    <Image
                      src={item.imageURL}
                      alt=''
                      width={360}
                      height={360}
                    />
                    <div>
                      <span>{item.date}</span>
                      <p>{item.title}</p>                  
                    </div>
                  </Link>
                ))
                }
              </div>
              <div className='seeMore'>
                <hr />
                <ButtonContainer
                  style={{
                    width: '16.25rem',
                  }}
                  onClick={() => router.push('/blog')}
                >
                Ver tudo
                </ButtonContainer>
                <hr />
              </div>            
              </>
              )      
              :
              <h2 className='notFound'>Nenhum post encontrado</h2>
            }     
        </PostsContainer>
      </HomeContainer>

      <StoreContainer>
        <div className='container'>
          <h2>Loja GreenPalate</h2>
          <StoreCategorySelector />
          
          <div className='mostSelled'>
            <div className='text'>
              <h2>
                Mais Vendidos
              </h2>
              <p>Os melhores produtos para preparar receitas incríveis na sua casa, de forma sustentável, consciente e elegante!</p>
              <ButtonContainer
                  style={{
                    width: '100%',
                  }}
                  onClick={() => router.push('/store')}
                >
                Ver tudo
              </ButtonContainer>
              <hr />
            </div>
            {topProducts?.length ? 
            topProducts.map((item) => 
            <ProductDisplay
              key={item.id}
              productImage={item.imageURL}
              productName={item.name}
              productLink={item.link}
              price={item.price}
            />)
            :
            <h2>Nenhum Produto Encontrado</h2>
            }
          </div>
        </div>
      </StoreContainer>
    </div> 
    </>
  )
}

export const getStaticProps:GetStaticProps = async() => {

  let recipesResumed = []
  let postsResumed = []
  let topProducts = []

  try {
    const recipes = await api.get('/recipes')
    recipesResumed = recipes.data.map((item: any) => (
    {
      id: item.id,
      title: item.title,
      imageUrl: item.imageURL,
      ratings: item.ratings,
      portions: item.portions,
      requiredTime: item.requiredTime,
      category: item.category,
      slug: item.slug
    }
    ))
  }
  catch (error) {
    console.log('Erro ao buscar receitas\n' + error)
  }

  try {
    const posts = await api.get('/posts?_sort=timeStamp&_order=desc&_limit=4')
    postsResumed = posts.data.map((item: any) => ({
      id: item.id,
      title: item.title,
      imageURL: item.imageURL,
      date: item.date,
      slug: item.slug
    }))
  }
  catch (error) {
    console.log('Erro ao buscar posts\n' + error)
  }

  try {
    topProducts = await (await api.get('/productsPreview?_limit=3')).data
  }
  catch (error) {
    console.log('Erro ao buscar produtos\n' + error)
  }

  return {
    props: {
      recipesResumed,
      postsResumed,
      topProducts
    }
  }
}