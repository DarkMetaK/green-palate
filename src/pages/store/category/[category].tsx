import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router'
import { StoreCategoryContainer, GridStoreCategory } from '@/styles/pages/StoreCategory';
import { api } from '@/services/api';

import { ProductDisplay } from '@/components/ProductDisplay';

interface IStore {
  productsByCategory: {
    id: string,
    imageURL: string,
    name: string,
    price: number,
    link: string
  }[]
}

type Category = 'utensils' | 'books' | 'ornaments' | 'ceramics'

export default function StoreCategory({productsByCategory}: IStore) {
  const router = useRouter()
  const { category = 'utensils' }: { category?: Category } = router.query

  const categoryTranslated = {
    utensils: 'Utensílios e Panelas',
    books: 'Livros',
    ornaments: 'Decorações',
    ceramics: 'Louças'
  }

  return (
    <StoreCategoryContainer>
      <h1>{`Loja - ${categoryTranslated[category]}`}</h1>
      <GridStoreCategory>
        {productsByCategory.length ? 
          productsByCategory?.map(item => 
            <ProductDisplay
              key={item.id}
              price={item.price}
              productImage={item.imageURL}
              productLink={item.link}
              productName={item.name}
            />
          ) : <h2>Nenhum Produto Encontrado</h2>
        }
      </GridStoreCategory>
    </StoreCategoryContainer>
  )
}

export const getStaticProps: GetStaticProps<any, {category: string}> = async({params}) => {
  let productsByCategory = []
  try {
    productsByCategory = await (await api.get(`/productsPreview?category=${params?.category}`)).data
  }
  catch (error) {
    console.log(error)
  }

  return {
    props: {
      productsByCategory
    }
  }
}

export const getStaticPaths: GetStaticPaths = async() => {
  return {
    paths: [
      {params: {category: 'utensils'}},
      {params: {category: 'books'}},
      {params: {category: 'ornaments'}},
      {params: {category: 'ceramics'}}
    ],
    fallback: false
  }
}