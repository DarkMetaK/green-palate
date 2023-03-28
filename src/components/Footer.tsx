import Link from 'next/link';
import Image from 'next/image';

import { FooterContact, FooterContainer, FooterInfo } from '@/styles/components/Footer';

import InstagramIcon from '../assets/social Media/Instagram.svg';
import FacebookIcon from '../assets/social Media/Facebook.svg';
import YoutubeIcon from '../assets/social Media/Youtube.svg';
import TikTokIcon from '../assets/social Media/TikTok.svg';
import TwitterIcon from '../assets/social Media/Twitter.svg';
import PinterestIcon from '../assets/social Media/Pinterest.svg';

export function Footer() {
  return (
    <>
    <FooterContainer>
      <div className="grid">
        <FooterContact>
          <div className='newsletter'>
            <p>Receba nossas novidades</p>
            <form action="">
              <input type="text" placeholder='Digite seu e-mail'/>
              <button>Assinar</button>
            </form>            
          </div>
          <div className='social'>
            <p>Siga nossas redes sociais</p>
            <div>
              <Link href='https://github.com/DarkMetaK'>
                <Image
                  src={InstagramIcon}
                  alt=''
                  width={32}
                  height={32}
                />  
              </Link>
              <Link href='https://github.com/DarkMetaK'>
                <Image
                  src={FacebookIcon}
                  alt=''
                  width={32}
                  height={32}
                />  
              </Link>
              <Link href='https://github.com/DarkMetaK'>
                <Image
                  src={YoutubeIcon}
                  alt=''
                  width={32}
                  height={32}
                />  
              </Link>
              <Link href='https://github.com/DarkMetaK'>
                <Image
                  src={TikTokIcon}
                  alt=''
                  width={32}
                  height={32}
                />  
              </Link>
              <Link href='https://github.com/DarkMetaK'>
                <Image
                  src={PinterestIcon}
                  alt=''
                  width={32}
                  height={32}
                />  
              </Link>
              <Link href='https://github.com/DarkMetaK'>
                <Image
                  src={TwitterIcon}
                  alt=''
                  width={32}
                  height={32}
                />  
              </Link>
            </div>
          </div>
        </FooterContact>

        <FooterInfo>
          <div>
            <p>Categorias</p>
            <ul>
              <li>
                <Link href='/recipe/category/main'>Pratos Principais</Link>
              </li>
              <li>
                <Link href='/recipe/category/appetizer'>Entradas</Link>
              </li>
              <li>
                <Link href='/recipe/category/drinks'>Bebidas</Link>
              </li>
              <li>
                <Link href='/recipe/category/snacks'>Lanches</Link>
              </li>
              <li>
                <Link href='/recipe/category/breakfast'>Cafezinho</Link>
              </li>
            </ul>
          </div>

          <div>
            <p>Mais acessadas</p>
            <ul>
              <li>
                <Link href='/'>Carne de Soja</Link>
              </li>
              <li>
                <Link href='/'>Coxinha Vegana</Link>
              </li>
              <li>
                <Link href='/'>Carne de Couve-Flor</Link>
              </li>
              <li>
                <Link href='/'>Bolinho de Espinafre</Link>
              </li>
              <li>
                <Link href='/'>Berinjela à parmegiana</Link>
              </li>
            </ul>
          </div>

          <div>
            <p>Sobre</p>
            <ul>
              <li>
                <Link href='/about'>Quem Somos</Link>
              </li>
              <li>
                <Link href='/about'>Política de privacidade</Link>
              </li>
              <li>
                <Link href='/about'>Termos de Uso</Link>
              </li>
              <li>
                <Link href='/about'>Anuncie</Link>
              </li>
              <li>
                <Link href='/about'>Contato</Link>
              </li>
            </ul>
          </div>
        </FooterInfo>
      </div>
      <p>© 2023 - MATHEUS PORTO. ALGUNS DIREITOS RESERVADOS.</p> 
    </FooterContainer>   
    </>
  )
}