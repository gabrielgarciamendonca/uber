import React from 'react';

import {InputChar} from '../InputChar';
import {InputBoxContainer} from './styles';
import {TInputBoxView} from './types';

export function InputBoxView({onChange, refs}: TInputBoxView) {
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
