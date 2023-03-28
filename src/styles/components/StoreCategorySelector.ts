import { styled } from '../config';

export const StoreCategorySelectorContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, 16.25rem)',
  justifyContent: 'center',
  gap: '2.5rem',
  margin: '0 0',

  a: {
    borderRadius: 5,
    
    img: {
      borderRadius: 5,
      boxShadow: '0 3px 3px -1px rgba(0,0,0,.1)',
      marginBottom: '0.75rem',
      width: '100%',
      objectFit: 'cover'
    },

    span: {
      fontSize: '0.75rem',
      textTransform: 'uppercase',
      color: '$green'
    },

    p: {
      fontSize: '1.125rem',
      fontWeight: 700,
      marginTop: '0.5rem'
    },

    transition: 'all 0.2s',
    '&:hover': {
      transform: 'scale(1.02)',
      p: {
        color: '$lightGreen'
      }
    }
  }
})