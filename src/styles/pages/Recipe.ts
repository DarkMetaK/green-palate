import { styled } from '../config';

export const RecipeContainer = styled('main', {
  maxWidth: '72.5rem',
  width: '100%',
  margin: '0 auto',
})

export const RecipeInformationContainer = styled('div', {
  display: 'flex',
  gap: '2.5rem',
  flexWrap: 'wrap',
  alignItems: 'center',

  'div.photo': {
    maxWidth: '35rem',
    width: '100%',
    '& > img': {
      objectFit: 'cover',
      width: '100%',
      borderRadius: 10      
    }
  },

  'div.info': {
    maxWidth: '35rem',
    width: '100%',
    marginBottom: '3.25rem',

    h1: {
      fontSize: '2rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      marginBottom: '1rem'
    },

    p: {
      fontSize: '1.125rem',
      lineHeight: 1.4
    }
  }
})

export const RecipeInfo = styled('div', {
  width: '100%',
  marginTop: '2.5rem',
  borderTop: '2px solid #E6EDE1',
  paddingTop: '2.5rem',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  'div.rating': {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',

    p: {
      color: '$gray400'
    },

    'div.stars': {
      display: 'flex',
      gap: '0.5rem',
      color: '$green'
    }
  },

  'div.recipeInfo': {
    display: 'flex',
    gap: '2.5rem',
    alignItems: 'center',

    div: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      alignItems: 'center',
      color: '$green',

      p: {
        textTransform: 'uppercase',
        fontWeight: 700
      }
    }
  }
})

export const SocialMediaShare = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  alignItems: 'center',
  marginTop: '1.25rem',

  p: {
    color: '$400'
  }
})

export const RecipeMain = styled('div', {
  marginTop: '5rem',

  display: 'flex',
  gap: '2.5rem',

  div: {
    maxWidth: '47.5rem',
    width: '100%',

    h2: {
      fontSiz: '1.25rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      marginBottom: '1.25rem'
    },
    'div.preparation': {
      marginTop: '2.5rem'
    }
  },
})
