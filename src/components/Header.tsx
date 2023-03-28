import Link from 'next/link';
import { HeaderContainer } from '@/styles/components/Header';

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <Link href='/'>GreenPalate</Link>
        <nav>
          <Link href='/recipe/category/main'>Receitas</Link>
          <Link href='/blog'>Blog</Link>
          <Link href='/store'>Loja</Link>
          <Link href='/about'>Sobre</Link>
          <Link href='/account'>Minha Conta</Link>
        </nav>
      </div>
    </HeaderContainer>    
  )
}
