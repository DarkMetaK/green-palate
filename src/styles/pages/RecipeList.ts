import { styled } from '../config';
import * as Dialog from '@radix-ui/react-dialog';

export const RecipeListContainer = styled('main', {
  maxWidth: '72.5rem',
  width: '100%',
  margin: '0 auto',

  '@sm': {
    paddingTop: '9.5rem'
  },

  h1: {
    margin: '2.5rem 0 1.25rem 0',
    textTransform: 'uppercase',
    fontSize: '1.5rem'
  },

  'div.searchConfig': {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    marginBottom: '2.5rem',
  },

  '@lg': {
    maxWidth: '100%',
    width: 'auto',
    margin: '0 1rem'
  },
})

export const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: 'rgba(0,0,0,.1)',
  position: 'fixed',
  inset: 0
})

export const DialogContent = styled(Dialog.Content, {
  backgroundColor: '$gray100',
  borderRadius: 10,
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '32.5rem',
  maxWidth: 450,
  padding: '1.5rem',

  '&:focus': {
    boxShadow: '0px 0px 0px black !important'
  },
})

export const RecipesList = styled('div', {
  width: '100%',
  background: '$gray100',
  padding: '1.25rem 1.25rem 2.5rem 1.25rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
  alignItems: 'center',

  '& > p': {
    maxWidth: '72.5rem',
    width: '100%',
    textAlign: 'left',
    fontSize: '0.75rem',
    color: '$gray500'
  },

  '& > div': {
    maxWidth: '72.5rem',
    width: '100%',

    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, 16.25rem)',
    gap: '2.5rem',

    '@md': {
      justifyContent: 'center',
    },

    '@sm': {
      gridTemplateColumns: 'minmax(auto, 22.5rem)'
    },
  }
})

export const RecipesTopTen = styled('div', {
  marginTop: '5rem',

  h2: {
    textTransform: 'uppercase',
    fontSize: '1.5rem',
    maxWidth: '72.5rem',
    width: '100%',
    margin: '0 auto 1.25rem auto',

    '@sm': {
      textAlign: 'center'
    },
  }
})

export const RecipesCarousel = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  maxWidth: 'fit-content',
  width: '100%',
  margin: '0 auto',

  a: {
    maxWidth: '22.5rem !important',
    width: '100% !important',
    minWidth: '16.25rem'
  },

  '& > button': {
    background: 'none',
    lineHeight: 0,
    border: 0,
    borderRadius: 5,
    alignSelf: 'center',
    cursor: 'pointer',
    color: '$green',
    transition: 'all 0.2s',
    '&:hover': {
      color: '$lightGreen'
    }
  },

  '& > div': {
    maxWidth: '72.5rem',
    width: '100%'
  }
})

export const RecipeBooks = styled('div', {
  maxWidth: '72.5rem',
  width: '100%',
  margin: '5rem auto',

  h2: {
    textTransform: 'uppercase',
    fontSize: '1.5rem',
    marginBottom: '1.25rem',
    '@sm': {
      textAlign: 'center'
    },
  },

  '& > div': {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, 16.25rem)',
    gap: '2.5rem',
    justifyContent: 'center',

    '@lg': {
      maxWidth: '100%',
      width: 'auto',
      margin: '0 1rem'
    },

    a: {
      background: '$gray100'
    }
  }
})
