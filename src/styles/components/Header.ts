import { keyframes, styled } from '../config';
import * as Dialog from '@radix-ui/react-dialog';

export const HeaderContainer = styled('header', {
  background: '$white',
  width: '100%',
  padding: '2.5rem',
  borderBottom: '2px solid $gray100',
  marginBottom: '2.5rem',

  '@sm': {
    position: 'fixed'
  },

  '& > div': {
    maxWidth: '72.5rem',
    width: '100%',
    margin: '0 auto',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',

    '& > a': {
      fontFamily: 'Noto Sans Tamil',
      color: '$green',
      fontWeight: 700,
      fontSize: '1.5rem',
      borderRadius: 5
    },

    nav: {
      display: 'flex',
      gap: '2.5rem',
      flexWrap: 'wrap',

      '@md': {
        display: 'none'
      },

      a: {
        fontSize: '1.125rem',
        transition: 'color 0.2s',
        borderRadius: 5,
        '&:hover': {
          color: '$lightGreen'
        }
      }
    }
  }
})

export const SideNav = styled('div', {
  width: 0,
  '#overlay': {
    width: '100%',
    height: '100%',
    content: '',
    background: 'rgba(0,0,0,.1)',
    zIndex: 1000
  },
  '#sidenavContent': {
    height: '100%', 
    maxWidth: 260,
    width: '100%',
    position: 'fixed',
    zIndex: 2000,
    top: 0,
    left: 0,
    backgroundColor: '$white',
    overflowX: 'hidden',
    paddingTop: 60,
    transition: '0.5s',    
  },
  a: {
    fontSize: '1.125rem',
    transition: 'color 0.2s',
    borderRadius: 5,
    '&:hover': {
      color: '$lightGreen'
    }
  }
})

export const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: 'rgba(0,0,0,.1)',
  position: 'fixed',
  inset: 0,
})

export const DialogTrigger = styled(Dialog.Trigger, {
  display: 'none',
  background: 'none',
  border: 0,
  borderRadius: 10,
  color: '$green',
  lineHeight: 0,
  transition: 'all 0.2s',

  '@md': {
    display: 'block'
  },

  '&:hover': {
    color: '$lightGreen'
  }
})

const slideIn = keyframes({
  "0%": {
    transform: "translateX(-100%)",
    opacity: 0,
  },
  "100%": {
    transform: "translateX(0)",
    opacity: 1,
  },
});

export const DialogContent = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  maxWidth: '16.25rem',
  width: '100%',
  height: '100%',
  padding: '1.5rem',

  animation: `${slideIn} 0.5s ease-in-out`,
  backgroundColor: '$white',
  borderRadius: 5,

  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  a: {
    width: '100%',
    padding: '1rem 0',
    borderBottom: '2px solid #E6EDE1',
    fontSize: '1.125rem',
    transition: 'color 0.2s',
    '&:hover': {
      color: '$lightGreen'
    }
  }
})

export const DialogClose = styled(Dialog.Close, {
  borderRadius: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$green',
  position: 'absolute',
  top: '10px',
  right: '10px',

  background: 'none',
  border: 0,
  transition: '0.2s all',
  '&:hover': {
    color: '$lightGreen'
  }
})