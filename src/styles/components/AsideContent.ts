import { styled } from '../config';

export const AsideContentContainer = styled('aside', {
  maxWidth: '22.5rem',
  width: '100%',
  
  display: 'flex',
  flexDirection: 'column',
  gap: '5rem',

  h3: {
    textTransform: 'uppercase'
  },

  'div.search': {
    '& > div': {
      display: 'flex',
      gap: '1.25rem',
      marginBottom: '1.25rem',
  
      hr: {
        flex: 1,
        alignSelf: 'center',
        borderTop: '2px solid #E6EDE1'
      }
    }
  },

  'div.recipes': {
    '& > div': {
      backgroundColor: '$gray100',
      borderRadius: 10,
      padding: '1.25rem 2.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem'
    },

    '& > span': {
      display: 'flex',
      gap: '1.25rem',
      marginBottom: '1.25rem',
  
      hr: {
        flex: 1,
        alignSelf: 'center',
        borderTop: '2px solid #E6EDE1'
      }
    }
  },

  'div.products': {
    '& > div': {
      padding: '1.25rem 2.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',

      '& > a': {
        background: '$gray100'
      }
    },

    '& > span': {
      display: 'flex',
      gap: '1.25rem',
      marginBottom: '1.25rem',
  
      hr: {
        flex: 1,
        alignSelf: 'center',
        borderTop: '2px solid #E6EDE1'
      }
    },
  }
})
