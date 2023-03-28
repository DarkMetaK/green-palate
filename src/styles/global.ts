import { globalCss } from './config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  img: {
    display: 'block',
    maxWidth: '100%'
  },

  a: {
    textDecoration: 'none',
    color: 'inherit'
  },

  body: {
    backgroundColor: '$gray50',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontSize: '1rem',
    color: '$gray900'
  },

  'h1, h2, h3, h4, h5, h6': {
    fontFamily: 'Noto Sans Tamil',
    color: '$green',
    fontWeight: 700
  },

  ':focus': {
    outline: 'transparent',
    boxShadow: '0 0 0 2px #27903E'
  },
})