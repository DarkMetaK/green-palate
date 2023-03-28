import Link from 'next/link';
import { styled } from '../config';

export const ProductDisplayContainer = styled(Link, {
  background: '$gray50',
  borderRadius: '0px 40px 40px 40px',
  overflow: 'hidden',

  img: {
    width: '100%',
    objectFit: 'cover'
  },
  div: {
    padding: '0.75rem 1.5rem',
    textAlign: 'center',

    span: {
      fontSize: '1.125rem',
      color: '$green',
      fontWeight: 700,
      marginTop: '0.5rem',
      display: 'block'
    }
  },

  transition: 'all 0.2s',
  '&:hover': {
    transform: 'scale(1.02)',
    div: {
      'p, span': {
        color: '$lightGreen'
      }
    }
  }
})