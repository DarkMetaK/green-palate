import { useEffect, useState } from 'react';
import { api } from '@/services/api';

import { ProductDisplay } from './ProductDisplay';
import RecipeDisplay from './RecipeDisplay';
import { SearchInput } from './SearchInput';
import { AsideContentContainer } from '@/styles/components/AsideContent';

interface ITopRecipesResumed {
  id: string,
  title: string,
  portions: number,
  requiredTime: number,
  ratings: {userId: number, rate: number}[],
  imageUrl: string,
  slug: string
}

interface ITopProducts {
  id: string,
  link: string,
  imageURL: string,
  name: string,
  price: number
}

interface IAsideContent {
  includeProducts?: boolean,
  includePostSearch?: boolean
}

export function AsideContent({includeProducts=false, includePostSearch=false}: IAsideContent) {

  const [topRecipesResumed, setTopRecipesResumed] = useState<ITopRecipesResumed[]>([])
  const [topProducts, setTopProducts] = useState<ITopProducts[]>([])

  async function retrievingDatafromDatabase() {
    try {
      const recipes = await api.get('/api/recipes?_limit=3')
      const topRecipesResumed = recipes.data.map((item: any) => (
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
      setTopRecipesResumed(topRecipesResumed)
    }
    catch (error) {
      console.log('Erro ao buscar receitas\n' + error)
    }

    try {
      const topProducts = await (await api.get('/api/productsPreview?_limit=3')).data
      setTopProducts(topProducts)
    }
    catch (error) {
      console.log('Erro ao buscar produtos\n' + error)
    }
  }

  useEffect(() => {
    retrievingDatafromDatabase()
  }, [])

  return (
    
    <AsideContentContainer>
      {includePostSearch === true && 
        <div className='search'>
          <div>
            <hr />
            <h3>Buscar Post</h3>
            <hr />
          </div>
          <SearchInput type='blog'/>
        </div>
      }
      {topRecipesResumed.length && (
        <div className='recipes'>
          <span>
            <hr />
            <h3>Receitas em Destaque</h3>
            <hr />
          </span>
          <div>
            {topRecipesResumed?.map(item => 
            <RecipeDisplay
              key={item.id}
              imageURL={item.imageUrl}
              ratings={item.ratings}
              recipeId={item.id}
              recipePortions={item.portions}
              recipeTitle={item.title}
              requiredTime={item.requiredTime}
              slug={item.slug}
            />
            )}
          </div>
        </div>
      )}
      {(topProducts.length && includeProducts) && (
        <div className='products'>
          <span>
            <hr />
            <h3>Melhores Produtos</h3>
            <hr />
          </span>
          <div>
            {topProducts?.map(item => 
            <ProductDisplay
              key={item.id}
              price={item.price}
              productImage={item.imageURL}
              productLink={item.link}
              productName={item.name}
            />
            )}
          </div>
        </div>
      )}
    </AsideContentContainer>
  )
}
