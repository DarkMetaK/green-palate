import { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { CaretLeft, CaretRight, SlidersHorizontal } from 'phosphor-react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import * as Dialog from '@radix-ui/react-dialog';
import { api } from '@/services/api';

import { SearchInput } from '@/components/SearchInput';
import RecipeDisplay from '@/components/RecipeDisplay';
import { ProductDisplay } from '@/components/ProductDisplay';
import { CategoryFilter } from '@/components/CategoryFilter';
import { DialogContent, DialogOverlay, RecipeBooks, RecipeListContainer, RecipesCarousel, RecipesList, RecipesTopTen } from '@/styles/pages/RecipeList';
import { ButtonContainer } from '@/styles/components/Button';

interface IRecipesFiltered {
  id: string,
  title: string,
  imageUrl: string,
  ratings: {userId: number, rate: number}[],
  portions: number,
  requiredTime: number,
  category: string,
  slug: string
}

interface IRecipeCategory {
  recipesFilteredByCategory: IRecipesFiltered[],
  topTenRecipes: IRecipesFiltered[],
  books: {
    id: string,
    imageURL: string,
    name: string,
    price: number,
    link: string,
    category: string
  }[]
}

type Category = 'main' | 'appetizer' | 'drinks' | 'dessert' | 'snacks' | 'breakfast'

export default function RecipeCategory({recipesFilteredByCategory, topTenRecipes, books}: IRecipeCategory) {
  const router = useRouter()
  const { category = 'main' }: { category?: Category } = router.query
  const categoryTranslated = {
    main: 'Pratos Principais',
    appetizer: 'Entradas',
    drinks: 'Bebidas',
    dessert: 'Sobremesas',
    snacks: 'Lanches',
    breakfast: 'Cafézinho',
  }

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: {
        perView: 'auto',
        origin: 'auto',
        spacing: 40
      },
      loop: true,
      drag: false
    }, [])

  const [recipesToDisplay, setRecipesToDisplay] = useState<IRecipesFiltered[]>([])
  const [lastRecipeIndex, setLastRecipeIndex] = useState<number>(0)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    const firstThirtyRecipes = recipesFilteredByCategory.slice(0, 30)
    setRecipesToDisplay(firstThirtyRecipes)
    setLastRecipeIndex(firstThirtyRecipes.length)
  }, [recipesFilteredByCategory])

  function loadMoreRecipes() {
    const tenNextRecipesToShow = recipesFilteredByCategory.slice(lastRecipeIndex, lastRecipeIndex + 10)
    const lastRecipeIndexFromOriginalArray = recipesFilteredByCategory.findIndex((item) => item.id === tenNextRecipesToShow[tenNextRecipesToShow.length-1].id)

    setRecipesToDisplay(state => [...state, ...tenNextRecipesToShow])
    setLastRecipeIndex(lastRecipeIndexFromOriginalArray + 1)
  }

  return (
    <>
    <RecipeListContainer>
      <h1>{`Receitas - ${categoryTranslated[category]}`}</h1>
      <div className='searchConfig'>
        <SearchInput />
        <Dialog.Root open={modalIsOpen} onOpenChange={setModalIsOpen}>
          <Dialog.Trigger asChild>
            <ButtonContainer
            style={{
              borderRadius: 5,
              width: '10rem',
              display: 'flex',
              gap: '0.75rem',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'flex-end',
              fontWeight: 400,
              textTransform: 'capitalize'
            }}
            >
              Filtros
              <SlidersHorizontal size={24}/>
            </ButtonContainer>
          </Dialog.Trigger>
          <Dialog.Portal>
            <DialogOverlay />
            <DialogContent>
              <CategoryFilter currentCategory={String(category)} setModalIsOpen={setModalIsOpen}/>
            </DialogContent>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </RecipeListContainer>

    <RecipesList>
      <p>{recipesFilteredByCategory.length} resultados</p>
      <div>
      {
        recipesToDisplay.map(recipe => 
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
      {recipesToDisplay.length < recipesFilteredByCategory.length ?         <ButtonContainer
          style={{
            width: '16.25rem',
            gridColumn: '1 / -1',
            margin: '0 auto'
          }}
          onClick={() => loadMoreRecipes()}
        >
          Carregar Mais
        </ButtonContainer> 
      : null
      }
      </div>
    </RecipesList>

    <RecipesTopTen>
      <h2>Top 10 - Destaques da Semana</h2>
      <RecipesCarousel>
        <button onClick={() => instanceRef.current?.prev()}>
          <CaretLeft size={32}/>
        </button>
        <div ref={sliderRef} className='keen-slider'>
          {
            topTenRecipes.map(recipe => 
            <RecipeDisplay key={recipe.id}
              recipeId={recipe.id}
              imageURL={recipe.imageUrl}
              ratings={recipe.ratings}
              recipePortions={recipe.portions}
              requiredTime={recipe.requiredTime}
              recipeTitle={recipe.title}
              slug={recipe.slug}
              classname='keen-slider__slide'
            />)
          }
        </div>
        <button onClick={() => instanceRef.current?.next()}>
          <CaretRight size={32}/>
        </button>
      </RecipesCarousel>    
    </RecipesTopTen>

    <RecipeBooks>
      <h2>Confira nossos livros de receitas</h2>
      <div>
        {books.map(item => 
        <ProductDisplay
          key={item.id}
          price={item.price}
          productImage={item.imageURL}
          productLink={item.link}
          productName={item.name}
        />  
        )}
      </div>
    </RecipeBooks>

    </> 
  )
}

export const getStaticProps: GetStaticProps<any, {category: string}> = async({params}) => {
  let recipesFilteredByCategory = []
  let topTenRecipes = []
  let books = []

  try {
    const recipes = await api.get(`/recipes?category=${params?.category}`)
    recipesFilteredByCategory = recipes.data.map((item: any) => (
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

  try {
    const recipes = await api.get(`/recipes?_limit=10`)
    topTenRecipes = recipes.data.map((item: any) => (
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
    console.log('Ocorreu um erro nas receitas destaque' + error)
  }

  try {
    const booksList = await api.get(`/productsPreview?category=books&_limit=4`)
    books = booksList.data
  }
  catch(error) {
    console.log('Ocorreu um erro nos livros ' + error)
  }

  return {
    props: {
      recipesFilteredByCategory,
      topTenRecipes,
      books
    }
  }
}

export const getStaticPaths:  GetStaticPaths = async() => {
  return {
    paths: [
      {params: {category: 'main'}},
      {params: {category: 'appetizer'}},
      {params: {category: 'drinks'}},
      {params: {category: 'dessert'}},
      {params: {category: 'snacks'}},
      {params: {category: 'breakfast'}}
    ],
    fallback: false
  }
}
