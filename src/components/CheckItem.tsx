import { useState } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

import { CheckBoxRoot, CheckItemContainer } from '@/styles/components/CheckItem';

interface ICheckItem {
  item: string
}

export function CheckItem({item}: ICheckItem) {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <CheckItemContainer>
      <CheckBoxRoot checked={isChecked} onCheckedChange={() => setIsChecked(!isChecked)} id={item}>
        <Checkbox.Indicator>
          <Check size={24}/>
        </Checkbox.Indicator>
      </CheckBoxRoot>
      <label className={isChecked ? 'checked' : ''} htmlFor={item}>{item}</label>
    </CheckItemContainer>
  )
}
