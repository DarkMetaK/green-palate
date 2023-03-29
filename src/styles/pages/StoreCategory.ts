import { styled } from '../config';

export const StoreCategoryContainer = styled('main', {
  maxWidth: '72.5rem',
  width: '100%',
  margin: '0 auto',

  h1: {
    textTransform: 'uppercase',
    marginBottom: '1.25rem',
    fontSize: '1.5rem'
  },

  '@lg': {
    maxWidth: '100%',
    width: 'auto',
    margin: '0 1rem'
  },

  '@sm': {
    paddingTop: '9.5rem'
  },
})

export const GridStoreCategory = styled('div', {
  margin: '1.25rem 0 5rem 0',
  width: '100%',

  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, 16.25rem)',
  gap: '2.5rem',
  justifyContent: 'center',

  '& > h2': {
    textAlign: 'left',
    gridArea: '1 / -1',
    color: '$gray800'
  },

  '& > a': {
    background: '$gray100'
  }
})
