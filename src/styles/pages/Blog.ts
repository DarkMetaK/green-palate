import { styled } from '../config';

export const BlogContainer = styled('div', {
  maxWidth: '72.5rem',
  width: '100%',
  margin: '0 auto',

  display: 'grid',
  gridTemplateColumns: 'auto minmax(22.5rem, 1fr)',
  gap: '0 2.5rem',

  marginBottom: '5rem',

  h1: {
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    marginBottom: '1.25rem',
    gridColumn: '1 / -1'
  },

  '@lg': {
    maxWidth: '100%',
    width: 'auto',
    margin: '0 1rem 5rem 1rem'
  },

  '@md': {
    gridTemplateColumns: '1fr'
  },

  '@sm': {
    paddingTop: '9.5rem'
  },
})

export const BlogMainContent = styled('main', {
  'div.posts': {
    marginTop: '2.5rem',

    h2: {
      fontSize: '1.5rem',
      textTransform: 'uppercase',
      marginBottom: '1.25rem',
    },

    '& > div': {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(16.25rem, 1fr))',
      gap: '2.5rem',
      
      'div.btn': {
        gridColumn: '1 / -1',
        display: 'flex',
        gap: '2.5rem',

        hr: {
          flex: 1,
          alignSelf: 'center',
          borderTop: '2px solid #E6EDE1'
        }
      }
    }
  }
})
