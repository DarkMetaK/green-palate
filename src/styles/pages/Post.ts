import { styled } from '../config';

export const PostContainer = styled('div', {
  maxWidth: '72.5rem',
  width: '100%',
  margin: '0 auto',

  display: 'grid',
  gridTemplateColumns: 'auto minmax(22.5rem, 1fr)',
  gap: '0 2.5rem',

  marginBottom: '5rem',

  'div.other': {
    marginTop: '5rem',
    'div.title': {
      display: 'flex',
      alignItems: 'center',
      gap: '1.25rem',
      marginBottom: '1.25rem',

      h2: {
        fontSize: '1.5rem',
        textTransform: 'uppercase'
      },

      hr: {
        flex: 1,
        borderTop: '2px solid #E6EDE1'
      }
    }
  }
})

export const GeneralInfoContainer = styled('div', {
  h1: {
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    marginBottom: '1.25rem',
    lineHeight: 1.4,
    gridColumn: '1 / -1'
  },
  
  img: {
    objectFit: 'cover',
    borderRadius: 10,
    width: '100%'
  },

  span: {
    fontSize: '0.75rem',
    display: 'flex',
    marginTop: '1.25rem',
    alignItems: 'center',
    gap: '1.25rem',

    hr: {
      flex: 1,
      borderTop: '2px solid #E6EDE1'
    }
  }
})

export const ContentContainer = styled('div', {
  p: {
    fontSize: '1.125rem',
    lineHeight: 1.4,
    marginTop: '1.25rem'
  },
  div: {
    marginTop: '2.5rem',
    h2: {
      fontSize: '1.5rem',
    }
  }
})

export const OtherPostsContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '2.5rem',
})
