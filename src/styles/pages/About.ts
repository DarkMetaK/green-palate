import { styled } from '../config';

export const AboutContainer = styled('main', {
  maxWidth: '72.5rem',
  width: '100%',
  margin: '0 auto 5rem auto',

  display: 'flex',
  justifyContent: 'space-between',

  'h1, h2': {
    fontSize: '1.5rem',
    textTransform: 'uppercase'
  },

  div: {
    p: {
      marginTop: '1.25rem',
      maxWidth: '35rem',
      fontSize: '1.125rem',
      lineHeight: 1.4
    }
  },

  img: {
    borderRadius: 10,
    objectFit: 'cover'
  }
})

export const WhoWeAreContainer = styled('div', {
  backgroundColor: '$gray100',
  padding: '2.5rem 0',

  'div.info': {
    maxWidth: '72.5rem',
    margin: '0 auto 2.5rem auto',

    h2: {
      fontSize: '3rem',
      color: '$gray200',
      textTransform: 'uppercase'
    },

    p: {
      marginTop: '1.25rem',
      maxWidth: '35rem',
      fontSize: '1.125rem',
      lineHeight: 1.4,
      b: {
        color: '$green'
      }
    }
  }
})

export const ProfilePictures = styled('div', {
  maxWidth: '72.5rem',
  margin: '0 auto',

  display: 'flex',
  gap: '2.5rem',
  flexWrap: 'wrap',

  'div.user': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    img: {
      borderRadius: '100%',
      objectFit: 'cover',
      marginBottom: '1.25rem'
    },

    'p.name': {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '$green',
      marginBottom: '0.5rem'
    },
    'p.position': {
      fontSize: '1.125rem'
    }
  }
})

export const MissionContainer = styled('div', {
  display: 'flex',
  gap: '8.75rem',
  alignItems: 'center',
  width: 'fit-content',
  margin: '5rem auto',

  h2: {
    fontSize: '6rem',
    textAlign: 'center',
    color: '$gray150',
  },

  '& > div': {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  'div.mission': {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    alignSelf: 'stretch',
    justifyContent: 'space-between',

    h3: {
      fontSize: '3rem',
      textTransform: 'uppercase'
    },
    p: {
      fontSize: '1.125rem',
      lineHeight: 1.4,
      maxWidth: '35rem'
    },
  }
})

export const ContactForm = styled('div', {
  backgroundColor: '$gray100',
  padding: '2.5rem 0',

  h2: {
    fontSize: '3rem',
    textTransform: 'uppercase',
    color: '$gray200'
  },

  '& > div': {
    maxWidth: '72.5rem',
    margin: '0 auto',

    form: {
      marginTop: '1.25rem',
      maxWidth: '35rem',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',

      p: {
        fontSize: '0.75rem',
        color: 'red'
      },

      label: {
        fontSize: '1.125rem',
        fontWeight: 700
      },

      'input, textarea': {
        padding: '0.75rem',
        border: '1px solid #C0CCBA',
        borderRadius: 5
      },

      'input.wrong, textarea.wrong': {
        border: '1px solid red'
      },

      '& > div': {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }
    }
  }
})
