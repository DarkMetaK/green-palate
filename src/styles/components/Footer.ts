import { styled } from '../config';

export const FooterContainer = styled('footer', {
  borderTop: '2px solid #D5DECE',
  'div.grid': {
    maxWidth: '72.5rem',
    width: '100%',
    margin: '0 auto',
    padding: '2.5rem 0',
    
    '@lg': {
      maxWidth: '100%',
      width: 'auto',
      margin: '0 1rem'
    }
  },

  '& > p': {
    width: '100%',
    background: '$gray100',
    textAlign: 'center',
    padding: 10,
    fontSize: '0.75rem'
  }
})

export const FooterContact = styled('div', {
  display: 'flex',
  gap: '2.5rem',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '2.5rem',
  flexWrap: 'wrap',

  'div.newsletter': {
    maxWidth: '35rem',
    width: '100%',

    p: {
      fontWeight: 500,
      textTransform: 'uppercase',
      textAlign: 'center',
      marginBottom: '1.25rem'
    },

    form: {
      display: 'flex',

      input: {
        flex: 1,
        padding: '0.5rem 1rem',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    
        backgroundColor: '$gray100',
        border: 'none',
        borderTop: '1px solid $gray100',
        borderLeft: '1px solid $gray100',
        borderBottom: '1px solid $gray100',
    
        height: '2.5rem',
      },
    
      button: {
        maxWidth: '10rem',
        width: '100%',

        background: '$gray900',
        color: '$gray50',
        textTransform: 'uppercase',
    
        padding: '0.5rem 1rem',
        lineHeight: 0,
        border: 0,
        height: '2.5rem',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        minWidth: '3.75rem',
    
        cursor: 'pointer',
        transition: 'all 0.2s',
    
        '&:hover': {
          background: '$lightGreen',
        }
      }
    }
  },

  'div.social': {
    p: {
      fontWeight: 500,
      textTransform: 'uppercase',
      textAlign: 'center',
      marginBottom: '1.25rem'
    },
    
    div: {
      display: 'flex',
      gap: '2.5rem',
      flexWrap: 'wrap',
      justifyContent: 'center',

      a: {
        transition: 'all 0.2s',
        '&:hover': {
          transform: 'scale(1.2)',
        }
      }
    }
  }
})

export const FooterInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '2.5rem',
  flexWrap: 'wrap',

  borderTop: '2px solid #E6EDE1',
  paddingTop: '2.5rem',

  div: {
    maxWidth: '16.25rem',
    width: '100%',

    p: {
      fontWeight: 500,
      textTransform: 'uppercase',
      marginBottom: '1.25rem'
    },
    ul: {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',

      a: {
        fontSize: '0.75rem',
        borderRadius: 5,
        transition: 'all 0.2s',
        '&:hover': {
          color: '$lightGreen',
        }
      }
    }
  }
})
