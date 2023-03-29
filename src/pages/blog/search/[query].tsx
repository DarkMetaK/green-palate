import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { api } from '@/services/api';

import { SearchContainer } from '@/styles/pages/RecipeSearch';
import { SearchInput } from '@/components/SearchInput';
import { PostsDisplay } from '@/components/PostDisplay';
import { RecipesList } from '@/styles/pages/RecipeList';

interface IRecipeSearch {
  postsResult: {
    id: string,
    title: string,
    imageURL: string,
    date: string,
    slug: string
  }[]
}

export default function RecipeSearch({postsResult}: IRecipeSearch) {
  const router = useRouter()
  const { query } = router.query

  return (
    <>
    <SearchContainer>
      <h1>Posts - Busca</h1>
      <SearchInput type='blog'/>
    </SearchContainer>

    <RecipesList>
    <p>{`${postsResult.length} resultados para '${query}'`}</p>
      <div>
      {
        postsResult.map(item => 
        <PostsDisplay key={item.id}
          id={item.id}
          imageURL={item.imageURL}
          date={item.date}
          title={item.title}
          imageSize='small'
          slug={item.slug}
        />)
      }
      </div>
    </RecipesList>    
    </>
  )
}

export const getServerSideProps: GetServerSideProps<any, {query: string}> = async({params}) => {
  let postsResult = []

  if (params?.query) {
    try {
      const posts = await api.get(`/posts?q=${params.query}`)
      postsResult = posts.data.map((item: any) => (
        {
          id: item.id,
          title: item.title,
          imageURL: item.imageURL,
          date: item.date,
          slug: item.slug
        }
      ))
    }
    catch(error) {
      console.log('Ocorreu um erro nos posts ' + error)
    }
  }

  return {
    props: {
      postsResult
    }
  }
}
