import Link from 'next/link';
import { styled } from '../config';

export const CarouselContainer = styled('div', {
  maxWidth: '47.5rem !important'
})

export const PostCaroulseItem = styled(Link, {
  position: 'relative',
  borderRadius: 10,

  img: {
    objectFit: 'cover',
    width: '100%'
  },

  transition: 'all 0.2s',
  '&:hover': {
    '&>div': {
      p: {
        color: '$lightGreen'
      }
    }
  },

  '&>div': {
    position: 'absolute',
    padding: '1.25rem',
    bottom: 0,
    background: 'linear-gradient(360deg, rgba(0,0,0,.9) 30%, rgba(0,0,0,.5) 70%, rgba(0,0,0,.0) 100%);',

    color: '$gray50',
    span: {
      fontSize: '0.75rem'
    },
    p: {
      fontSize: '1.5rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      width: '60%',
      lineHeight: 1.3
    }
  }
})

export const ButtonsCarousel = styled('div', {
  position: 'absolute',
  bottom: 20,
  right: 20,
  
  display: 'flex',
  gap: '1.25rem',

  button: {
    width: '2rem',
    height: '1rem',
    background: '$gray50',
    borderRadius: 10,
    border: 0,
    cursor: 'pointer',

    '&.active': {
      background: '$green'
    }
  }
})