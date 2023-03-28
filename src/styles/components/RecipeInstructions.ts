import { styled } from '../config';

export const RecipeInstructionsContainer = styled('div', {
  background: '$gray100',
  padding: '1.5rem',
  borderRadius: 10,

  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
})

export const PreparationItem = styled('div', {
  display: 'flex',
  gap: '1.5rem',
  alignItems: 'center',

  span: {
    fontSize: '3rem',
    color: '$gray250'
  },

  p: {
    fontSize: '1.125rem',
    lineHeight: 1.4
  }
})
