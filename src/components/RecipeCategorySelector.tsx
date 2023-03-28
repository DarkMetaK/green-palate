import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { OptionsContainer, RecipesContainer } from '@/styles/components/RecipeCategorySelector';
import RecipeDisplay from './RecipeDisplay';
import { ButtonContainer } from '@/styles/components/Button';

import principal from '../assets/pratos-principais.jpg'
import entrada from '../assets/entradas.jpg'
import bebida from '../assets/bebidas.jpg'
import sobremesa from '../assets/sobremesas.jpg'
import lanche from '../assets/lanches.jpg'
import cafe from '../assets/cafezinho.jpg'


interface IRecipeCategorySelector {
  recipesResumed: {
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

interface IRecipe {
  id: string,
  title: string,
  imageUrl: string,
  ratings: {userId: number, rate: number}[],
  portions: number,
  requiredTime: number,
  category: string,
  slug: string
}

export function RecipeCategorySelector({recipesResumed}: IRecipeCategorySelector) {

  const router = useRouter()

  const [selectedCategory, setSelectedCategory] = useState('main')
  const [recipesOfSelectedCategory, setRecipesOfSelectedCategory] = useState<IRecipe[]>()

  useEffect(() => {
    const listOfRecipes = recipesResumed.filter(item => item.category === selectedCategory)
    setRecipesOfSelectedCategory(listOfRecipes.slice(0, 8))
  }, [recipesResumed, selectedCategory])

  return (
    <>
    <OptionsContainer>
      <button
        className={selectedCategory === 'main' ? 'selected' : ''}
        onClick={() => {
          if(selectedCategory !== 'main') setSelectedCategory('main')
        }}
      >
        <Image
          src={principal}
          alt=''
          width={640}
          height={800}
        />
        <p>Principais</p>
      </button>
      <button
        className={selectedCategory === 'appetizer' ? 'selected' : ''}
        onClick={() => {
          if(selectedCategory !== 'appetizer') setSelectedCategory('appetizer')
        }}
      >
        <Image
          src={entrada}
          alt=''
          width={640}
          height={958}
        />
        <p>Entradas</p>
      </button>
      <button
        className={selectedCategory === 'drink' ? 'selected' : ''}
        onClick={() => {
          if(selectedCategory !== 'drink') setSelectedCategory('drink')
        }}
      >
        <Image
          src={bebida}
          alt=''
          width={640}
          height={1137}
        />
        <p>Bebidas</p>
      </button>
      <button
        className={selectedCategory === 'dessert' ? 'selected' : ''}
        onClick={() => {
          if(selectedCategory !== 'dessert') setSelectedCategory('dessert')
        }}
      >
        <Image
          src={sobremesa}
          alt=''
          width={640}
          height={958}
        />
        <p>Sobremesas</p>
      </button>
      <button
        className={selectedCategory === 'snack' ? 'selected' : ''}
        onClick={() => {
          if(selectedCategory !== 'snack') setSelectedCategory('snack')
        }}
      >
        <Image
          src={lanche}
          alt=''
          width={640}
          height={958}
        />
        <p>Lanches</p>
      </button>
      <button
        className={selectedCategory === 'breakfast' ? 'selected' : ''}
        onClick={() => {
          if(selectedCategory !== 'breakfast') setSelectedCategory('breakfast')
        }}
      >
        <Image
          src={cafe}
          alt=''
          width={640}
          height={426}
        />
        <p>Cafézinho</p>
      </button>
    </OptionsContainer>

    <RecipesContainer>
      {
      recipesOfSelectedCategory?.length ?
      (<>
        {recipesOfSelectedCategory.map((recipe) => 
        <RecipeDisplay key={recipe.id}
          recipeId={recipe.id}
          imageURL={recipe.imageUrl}
          ratings={recipe.ratings}
          recipePortions={recipe.portions}
          requiredTime={recipe.requiredTime}
          recipeTitle={recipe.title}
          slug={recipe.slug}
        />)}
        <ButtonContainer
          style={{
            width: '16.25rem',
            gridColumn: '1 / -1',
            margin: '0 auto'
          }}
          onClick={() => router.push(`/recipe/category/${selectedCategory}`)}
        >
          Ver tudo
        </ButtonContainer>
      </>)
      : <h2>Nenhuma receita encontrada</h2>
      }
    </RecipesContainer>
    </>
  )
}