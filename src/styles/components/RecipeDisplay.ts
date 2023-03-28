import Link from 'next/link';
import { styled } from '../config';

export const RecipeDisplayContainer = styled(Link, {
  borderRadius: 5,

  '&:hover': {
    transition: 'all 0.2s',
    transform: 'scale(1.02)',

    div: {
      color: '$lightGreen'
    }
  },

  img: {
    height: '12.5rem',
    objectFit: 'cover',
    borderRadius: 5,
    boxShadow: '0 3px 3px -1px rgba(0,0,0,.1)',
    marginBottom: '0.75rem'
  },
  div: {
    display: 'grid',
    gridTemplateColumns: 'auto max-content',
    gap: '0.5rem',

    p: {
      fontSize: '1.125rem',
      fontWeight: 500
    },

    span: {
      fontSize: '0.75rem',
      fontWeight: 700,
      color: '$green'
    },

    'span.icon': {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }
  }
})