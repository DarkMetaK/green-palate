import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { MagnifyingGlass } from 'phosphor-react';

import { SearchInputContainer } from '@/styles/components/SearchInput';

interface IForm {
  query: string,
}

interface ISearch {
  type?: 'recipe' | 'blog'
}

export function SearchInput({type='recipe'}: ISearch) {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<IForm>();
  const router = useRouter()

  function handleSubmitSearch({query}: IForm) {
    router.push(`/${type}/search/${query}`)
  }

  return (
    <SearchInputContainer onSubmit={handleSubmit(handleSubmitSearch)}>
      <input
        type='text'
        placeholder='Buscar'
        {...register('query', {required: true})}
      />
      <button disabled={isSubmitting}>
        <MagnifyingGlass size={24}/>
      </button>
    </SearchInputContainer>
  )
}