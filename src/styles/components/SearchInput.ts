import { styled } from '../config';

export const SearchInputContainer = styled('form', {
  display: 'flex',
  alignItems: 'center',

  input: {
    flex: 1,
    padding: '0.5rem 1rem',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,

    backgroundColor: '$white',
    border: 'none',
    borderTop: '1px solid $gray100',
    borderLeft: '1px solid $gray100',
    borderBottom: '1px solid $gray100',

    height: '2.5rem',
  },

  button: {
    background: '$green',
    color: '$gray50',

    padding: '0.5rem 1rem',
    lineHeight: 0,
    border: 0,
    height: '2.5rem',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    maxWidth: '10rem',
    width: '100%',

    cursor: 'pointer',
    transition: 'all 0.2s',

    '&:hover': {
      background: '$lightGreen',
    },

    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed'
    }
  }
})
