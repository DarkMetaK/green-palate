import { styled } from '../config';

export const OptionsContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '5rem',
  justifyContent: 'center',
  marginTop: '3.75rem',

  button: {
    border: 0,
    background: 'transparent',
    cursor: 'pointer',
    borderRadius: 5,

    img: {
      width: '6.25rem',
      height: '6.25rem',
      borderRadius: '50%',
      objectFit: 'cover',
      filter: 'grayscale(100%)',
      boxShadow: '0 3px 3px -1px rgba(0,0,0,.1)'
    },
    p: {
      fontSize: '1.125rem',
      color: '$gray600',
      marginTop: '0.75rem'
    },

    transition: 'all 0.2s',
    '&:hover': {
      img: {
        filter: 'none'
      }
    }
  },
  'button.selected': {
    img: {
      filter: 'none'
    },
    p: {
      color: '$green',
      fontWeight: 700
    }
  }
})

export const RecipesContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, 16.25rem)',
  gap: '2.5rem',
  marginTop: '3.75rem',
  marginBottom: '3.75rem',
  justifyContent: 'center',

  background: '$gray100',
  boxShadow: '0px 0px 0px 20px #E6EDE1',
  borderRadius: 5,

  h2: {
    textAlign: 'center',
    gridArea: '1 / -1',
    color: '$gray800'
  }
})
