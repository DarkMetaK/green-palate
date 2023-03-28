import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { useRouter } from 'next/router';

import { CategoryFilterContainer, RadioGroupIndicator, RadioGroupItem, RadioGroupRoot } from '@/styles/components/CategoryFilter';
import { ButtonContainer } from '@/styles/components/Button';

interface ICategoryFilter {
  currentCategory: string,
  setModalIsOpen: Dispatch<SetStateAction<boolean>>
}

export function CategoryFilter({currentCategory, setModalIsOpen}: ICategoryFilter) {
  const [selectedCategory, setSelectedCategory] = useState(currentCategory)
  const router = useRouter()

  function handleFilterSubmit(event: FormEvent) {
    event.preventDefault()
    router.push(`/recipe/category/${selectedCategory}`)
    setModalIsOpen(false)
  }

  return (
    <CategoryFilterContainer onSubmit={handleFilterSubmit}>
      <RadioGroupRoot defaultValue={selectedCategory} aria-label='View density' onValueChange={setSelectedCategory}>
        <div>
          <RadioGroupItem value='main' id='main'>
              <RadioGroupIndicator />
          </RadioGroupItem>
          <label htmlFor='main'>Principal</label>          
        </div>
        <div>
          <RadioGroupItem value='appetizer' id='appetizer'>
              <RadioGroupIndicator />
          </RadioGroupItem>
          <label htmlFor='appetizer'>Entrada</label>  
        </div>
        <div>
          <RadioGroupItem value='drinks' id='drinks'>
              <RadioGroupIndicator />
          </RadioGroupItem>
          <label htmlFor='drinks'>Bebidas</label>
        </div>
        <div>
          <RadioGroupItem value='dessert' id='dessert'>
              <RadioGroupIndicator />
          </RadioGroupItem>
          <label htmlFor='dessert'>Sobremesas</label> 
        </div>
        <div>
          <RadioGroupItem value='snacks' id='snacks'>
              <RadioGroupIndicator />
          </RadioGroupItem>
          <label htmlFor='snacks'>Lanches</label>  
        </div>
        <div>
          <RadioGroupItem value='breakfast' id='breakfast'>
              <RadioGroupIndicator />
          </RadioGroupItem>
          <label htmlFor='breakfast'>Cafézinho</label> 
        </div>
      </RadioGroupRoot>
      <ButtonContainer style={{
        borderRadius: 10,
        width: '100%',
        marginTop: '1.5rem'
      }}>
        Aplicar
      </ButtonContainer>
    </CategoryFilterContainer>
  )
}
