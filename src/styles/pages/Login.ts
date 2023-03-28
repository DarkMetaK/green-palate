import { styled } from '../config';

export const LoginContainer = styled('main', {
  maxWidth: '72.5rem',
  width: '100%',
  margin: '0 auto 5rem auto',

  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '2.5rem',

  h1: {
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    marginBottom: '1.25rem'
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',

    div: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',

      p: {
        fontSize: '0.875rem',
        color: 'red'
      }
    },

    label: {
      fontSize: '1.125rem',
      fontWeight: 500
    },

    input: {
      padding: '0.5rem',
      border: '1px solid #C0CCBA',
      borderRadius: 10,
    },

    'input.wrong': {
      border: '1px solid red'
    }
  },

  a: {
    display: 'block',
    textAlign: 'center',
    marginTop: '1.25rem',
    transition: 'all 0.2s',

    '&:hover': {
      color: '$green'
    }
  },

  img: {
    borderRadius: 10,
    objectFit: 'cover'
  }
})