import { styled } from '../config';

export const HomeContainer = styled('main', {
  maxWidth: '72.5rem',
  width: '100%',
  margin: '0 auto',

  '@lg': {
    maxWidth: '100%',
    width: 'auto',
    margin: '0 1rem'
  },

  '@sm': {
    paddingTop: '9.5rem'
  }
})

export const PostsContainer = styled('article', {
  borderTop: '2px solid #E6EDE1',
  paddingTop: '2.5rem',

  h2: {
    fontSize: '1.5rem',
    marginBottom: '1.25rem',
    textTransform: 'uppercase'
  },

  'h2.notFound': {
    textAlign: 'center',
    color: '$gray800',
  },

  'div.posts': {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(22.5rem, 1fr))',
    gap: '2.5rem',
    justifyContent: 'center',
    '@md': {
      gridTemplateColumns: '1fr 1fr'
    },
    '@sm': {
      gridTemplateColumns: 'minmax(auto, 22.5rem)'
    },

    a: {
      background: '$white',
      border: '1px solid #E6EDE1',
      boxShadow: '0px 3px 3px -1px rgba(0, 0, 0, 0.1)',
      borderRadius: '0px 40px 40px 40px',
      overflow: 'hidden',

      '&:hover': {
        transition: 'all 0.2s',
        transform: 'scale(1.02)',
        div: {
          color: '$lightGreen'
        }
      },

      '@md': {
        maxWidth: '22.5rem',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        img: {
          height: '17.5rem !important'
        }
      },

      img: {
        width: '100%',
        height: '10rem',
        objectFit: 'cover'
      },

      div: {
        margin: '0.75rem 1.5rem',

        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',

        span: {
          fontSize: '0.75rem'
        },

        p: {
          lineHeight: '1.4',
          fontWeight: 700
        }
      },
    },
  
    'a:first-child': {
      gridColumn: '1 / 2',
      gridRow: '1 / 3',

      img: {
        height: '75%',
      },

      '@md': {
        gridRow: '1'
      }
    },

    'a:last-child': {
      gridColumn: '2 / -1',

      display: 'flex',
      alignItems: 'center',

      '@lg': {
        gridColumn: '1 / -1',
        img: {
          width: '50%'
        }
      },
      '@md': {
        gridColumn: 'auto',
        img: {
          width: '100%'
        }
      }
    }
  },

  'div.seeMore': {
    width: '100%',
    display: 'flex',
    gap: '2.5rem',
    marginTop: '2.5rem',

    hr: {
      flex: 1,
      alignSelf: 'center',
      borderTop: '2px solid #E6EDE1'
    }
  }
})

export const StoreContainer = styled('div', {
  marginTop: '5rem',
  backgroundColor: '$gray100',

  'div.container': {
    maxWidth: '72.5rem',
    width: '100%',
    margin: '0 auto',
    padding: '2.5rem 0 5rem 0',

    '@lg': {
      maxWidth: '100%',
      width: 'auto',
      margin: '0 1rem',

      h2: {
        textAlign: 'center'
      }
    },

    h2: {
      fontSize: '1.5rem',
      textTransform: 'uppercase',
      marginBottom: '1.25rem'
    },

    'div.mostSelled': {
      marginTop: '3.75rem',
      width: '100%',

      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, 16.25rem)',
      gap: '2.5rem',
      justifyContent: 'center',

      'div.text': {
        h2: {
          fontSize: '3rem',
          lineHeight: 1.1,
          fontWeight: 700,
          color: '$gray300',
          textTransform: 'uppercase'
        },

        p: {
          marginTop: '1.25rem',
          fontSize: '1.125rem',
          lineHeight: 1.4,
          color: '$gray600',
          marginBottom: '2.5rem'
        },

        hr: {
          borderTop: '2px solid #D5DECE',
          marginTop: '1.25rem',
        }
      },

      a: {
        marginTop: '2.5rem',
      }
    }
  }
})