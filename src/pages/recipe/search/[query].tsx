import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { api } from '@/services/api';

import { SearchContainer } from '@/styles/pages/RecipeSearch';
import { SearchInput } from '@/components/SearchInput';
import RecipeDisplay from '@/components/RecipeDisplay';
import { RecipesList } from '@/styles/pages/RecipeList';

interface IRecipeSearch {
  recipesResult: {
    id: string,
    title: string,
    imageUrl: string,
    ratings: {userId: number, rate: number}[],
    portions: number,
    requiredTime: number,
    category: string,
    slug: string    
  }[]
}

export default function RecipeSearch({recipesResult}: IRecipeSearch) {
  const router = useRouter()
  const { query } = router.query

  return (
    <>
    <SearchContainer>
      <h1>Receitas - Busca</h1>
      <SearchInput />
    </SearchContainer>

    <RecipesList>
    <p>{`${recipesResult.length} resultados para '${query}'`}</p>
      <div>
      {
        recipesResult.map(recipe => 
        <RecipeDisplay key={recipe.id}
          recipeId={recipe.id}
          imageURL={recipe.imageUrl}
          ratings={recipe.ratings}
          recipePortions={recipe.portions}
          requiredTime={recipe.requiredTime}
          recipeTitle={recipe.title}
          slug={recipe.slug}
        />)
      }
      </div>
    </RecipesList>    
    </>
  )
}

export const getServerSideProps: GetServerSideProps<any, {query: string}> = async({params}) => {
  let recipesResult = []

  if (params?.query) {
    try {
      const recipes = await api.get(`/recipes?q=${params.query}`)
      recipesResult = recipes.data.map((item: any) => (
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
    catch(error) {
      console.log('Ocorreu um erro nas receitas ' + error)
    }
  }

  return {
    props: {
      recipesResult
    }
  }
}
