import Link from 'next/link';
import { styled } from '../config';

export const PostsDisplayContainer = styled(Link, {
  background: '$gray50',
  borderRadius: '0px 40px 40px 40px',
  overflow: 'hidden',
  border: '1px solid #E6EDE1',

  img: {
    width: '100%',
    objectFit: 'cover'
  },
  div: {
    padding: '0.75rem 1.5rem',

    span: {
      fontSize: '0.75rem',
      color: '$gray500',
      display: 'block',
      marginBottom: '0.5rem'
    },

    p: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: 1.4
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