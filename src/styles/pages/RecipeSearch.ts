import { styled } from '../config';

export const SearchContainer = styled('main', {
  maxWidth: '72.5rem',
  width: '100%',
  margin: '0 auto',
  marginBottom: '2.5rem',

  '@lg': {
    maxWidth: '100%',
    width: 'auto',
    margin: '0 1rem 2.5rem 1rem'
  },

  '@sm': {
    paddingTop: '9.5rem'
  },

  h1: {
    margin: '2.5rem 0 1.25rem 0',
    textTransform: 'uppercase',
    fontSize: '1.5rem'
  },
})