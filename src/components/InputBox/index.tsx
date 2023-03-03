import React from 'react';

import { InputChar } from '../InputChar';
import { InputBoxContainer } from './styles';
import { TInputBox } from './types';
import { useInputBoxViewModel } from './useInputBoxViewModel';

export function InputBox({ set, value }: TInputBox) {
  const { onChange, refs } = useInputBoxViewModel({ set, value });

  return (
    <InputBoxContainer>
      <InputChar
        keyboardType="numeric"
        onKeyPress={e => onChange(e, 0)}
        ref={refs[0]}
      />
      <InputChar
        keyboardType="numeric"
        onKeyPress={e => onChange(e, 1)}
        ref={refs[1]}
      />
      <InputChar
        keyboardType="numeric"
        onKeyPress={e => onChange(e, 2)}
        ref={refs[2]}
      />
      <InputChar
        keyboardType="numeric"
        onKeyPress={e => onChange(e, 3)}
        ref={refs[3]}
      />
    </InputBoxContainer>
  );
}
