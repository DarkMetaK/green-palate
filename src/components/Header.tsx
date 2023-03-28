import { useState } from 'react';
import Link from 'next/link';
import { List, X } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';

import { DialogClose, DialogContent, DialogOverlay, DialogTrigger, HeaderContainer } from '@/styles/components/Header';

export function Header() {
  const [open, setOpen] = useState(false)
  
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

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button><List size={24}/></button>
          </DialogTrigger>
          <Dialog.Portal>
            <DialogOverlay />
            <DialogContent>
                <DialogClose asChild>
                  <button className="IconButton" aria-label="Close">
                    <X size={24}/>
                  </button>
                </DialogClose>
                <Link href='/recipe/category/main' onClick={() => setOpen(false)}>Receitas</Link>
                <Link href='/blog' onClick={() => setOpen(false)}>Blog</Link>
                <Link href='/store' onClick={() => setOpen(false)}>Loja</Link>
                <Link href='/about' onClick={() => setOpen(false)}>Sobre</Link>
                <Link href='/account' onClick={() => setOpen(false)}>Minha Conta</Link>
            </DialogContent>
          </Dialog.Portal>
        </Dialog.Root>

      </div>
    </HeaderContainer>    
  )
}
