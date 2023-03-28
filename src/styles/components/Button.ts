import { styled } from '../config';

export const ButtonContainer = styled('button', {
  background: '$green',
  border: 0,
  padding: '0.75rem',
  borderRadius: '40px 40px 0px 40px',

  textTransform: 'uppercase',
  fontWeight: 700,
  color: '$gray50',

  cursor: 'pointer',
  transition: 'all 0.2s',

  '&:not(:disabled):hover': {
    background: '$lightGreen'
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed'
  }
})
