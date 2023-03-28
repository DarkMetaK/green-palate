import { styled } from '../config';

export const CommentsSection = styled('div', {
  marginTop: '5rem',
  padding: '2.5rem 0',
  background: '$gray100',

  '& > div': {
    maxWidth: '72.5rem',
    width: '100%',
    margin: '0 auto',

    h2: {
      fontSiz: '1.25rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      marginBottom: '1.25rem'
    },

    form: {
      width: '100%',
      display: 'flex',

      input: {
        flex: 1,
        border: 0,
        padding: '1rem',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
      }
    },

    'p.notFound': {
      color: '$gray400',
      marginTop: '1.25rem',
      fontSize: '1.125rem'
    },
  }
})

export const CommentItem = styled('div', {
  display: 'flex',
  gap: '0.75rem',
  alignItems: 'center',
  padding: '1.25rem 0',
  borderBottom: '3px solid #D5DECE',

  img: {
    borderRadius: '100%',
    objectFit: 'cover'
  },

  '& > div': {
    p: {
      maxWidth: '47.5rem',
      lineHeight: 1.4
    },
    'div.info': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '1.5rem',
      'p.author': {
        color: '$green',
        fontWeight: 700
      },
      'div.buttons': {
        display: 'flex',
        gap: '0.75rem',
        button: {
          border: 0,
          background: 'none',
          borderRadius: 10,
          color: '$green',
          lineHeight: 0,
          cursor: 'pointer',
          transition: 'all 0.2s',
          '&:hover': {
            color: '$lightGreen'
          }
        }
      }
    }
  }
})