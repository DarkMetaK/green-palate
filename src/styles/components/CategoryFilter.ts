import { styled } from '../config';
import * as RadioGroup from '@radix-ui/react-radio-group';

export const CategoryFilterContainer = styled('form', {
  '&:focus': {
    boxShadow: '0px 0px 0px black !important'
  },
  padding: '1.25rem'
})

export const RadioGroupRoot = styled(RadioGroup.Root, {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',

  '&:focus': {
    boxShadow: '0px 0px 0px black !important'
  },

  '& > div': {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  },
  
  label: {
    fontSize: '1.125rem'
  }
})

export const RadioGroupItem = styled(RadioGroup.Item, {
  backgroundColor: '$gray50',
  width: '2rem',
  height: '2rem',
  borderRadius: '100%',
  border: 0
})

export const RadioGroupIndicator = styled(RadioGroup.Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',

  '&:after': {
    content: '',
    display: 'block',
    width: '1rem',
    height: '1rem',
    borderRadius: '50%',
    backgroundColor: '$green'
  }
})
