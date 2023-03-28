import { styled } from '../config';

export const HeaderContainer = styled('header', {
  background: '$white',
  width: '100%',
  padding: '2.5rem',
  borderBottom: '2px solid $gray100',
  marginBottom: '2.5rem',

  div: {
    maxWidth: '72.5rem',
    width: '100%',
    margin: '0 auto',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',

    '& > a': {
      fontFamily: 'Noto Sans Tamil',
      color: '$green',
      fontWeight: 700,
      fontSize: '1.5rem',
      borderRadius: 5
    },

    nav: {
      display: 'flex',
      gap: '2.5rem',
      flexWrap: 'wrap',

      a: {
        fontSize: '1.125rem',
        transition: 'color 0.2s',
        borderRadius: 5,
        '&:hover': {
          color: '$lightGreen'
        }
      }
    }
  }
})