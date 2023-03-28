import Image from 'next/image';
import Link from 'next/link';

import { StoreCategorySelectorContainer } from '@/styles/components/StoreCategorySelector';

import utensilios from '../assets/loja/panelas.jpg';
import livros from '../assets/loja/livros.jpg';
import decoracoes from '../assets/loja/decoracoes.jpg';
import loucas from '../assets/loja/loucas.jpg';

export function StoreCategorySelector() {
  return (
    <StoreCategorySelectorContainer>
      <Link href='/store/category/utensils'>
        <Image
          src={utensilios}
          alt=''
          height={200}
        />
        <span>Utensílios selecionados a mão</span>
        <p>Utensílios Essenciais</p>
      </Link>

      <Link href='/store/category/books'>
        <Image
          src={livros}
          alt=''
          height={200}
        />
        <span>Complete sua coleção</span>
        <p>Livros Imperdíveis</p>
      </Link>

      <Link href='/store/category/ornaments'>
        <Image
          src={decoracoes}
          alt=''
          height={200}
        />
        <span>Para caprichar na mesa</span>
        <p>Decorações Belissímas</p>
      </Link>

      <Link href='/store/category/ceramics'>
        <Image
          src={loucas}
          alt=''
          height={200}
        />
        <span>Aprimore suas apresentações</span>
        <p>Louças Elegantes</p>
      </Link>
    </StoreCategorySelectorContainer>
  )
}
