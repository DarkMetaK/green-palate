import { GetServerSideProps } from 'next';
import { GridStoreContainerMostSelled, StoreContainer } from '@/styles/pages/Store';
import { api } from '@/services/api';

import { StoreCategorySelector } from '@/components/StoreCategorySelector';
import { ProductDisplay } from '@/components/ProductDisplay';

interface IStore {
  mostSelledItems: {
    id: string,
    imageURL: string,
    name: string,
    price: number,
    link: string
  }[]
}

export default function Store({mostSelledItems}: IStore) {
  return (
    <StoreContainer>
      <h1>Loja - Categorias</h1>
      <StoreCategorySelector />
      <h2>Mais Vendidos</h2>
      <GridStoreContainerMostSelled>
        {mostSelledItems.length ? 
          mostSelledItems?.map(item => 
            <ProductDisplay
              key={item.id}
              price={item.price}
              productImage={item.imageURL}
              productLink={item.link}
              productName={item.name}
            />
          ) : <h2>Nenhum Produto Encontrado</h2>
        }
      </GridStoreContainerMostSelled>
    </StoreContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async() => {
  let mostSelledItems = []
  try {
    mostSelledItems = await (await api.get('/api/productsPreview?_limit=8')).data
  }
  catch (error) {
    console.log(error)
  }

  return {
    props: {
      mostSelledItems
    }
  }
}