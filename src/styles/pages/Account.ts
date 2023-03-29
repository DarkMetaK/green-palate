import { styled } from '../config';

export const AccountContainer = styled('main', {
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
  },

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.25rem',
  marginBottom: '2.5rem',

  h1: {
    textAlign: 'center'
  }
})