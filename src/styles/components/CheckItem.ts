import { styled } from '../config';
import * as Checkbox from '@radix-ui/react-checkbox';

export const CheckItemContainer = styled('div', {
  display: 'flex',
  gap: '1.5rem',
  alignItems: 'center',

  label: {
    fontSize: '1.125rem',
  },

  'label.checked': {
    textDecoration: 'line-through'
  }
})

export const CheckBoxRoot = styled(Checkbox.Root, {
  backgroundColor: '$gray50',
  width: '2rem',
  height: '2rem',
  borderRadius: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 0,
  lineHeight: 0,

  '.indicator': {
    color: '$green'
  }
})
