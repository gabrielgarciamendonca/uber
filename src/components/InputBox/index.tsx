import React from 'react';

import {InputBoxView} from './InputBoxView';
import {TInputBox} from './types';
import {useInputBoxViewModel} from './useInputBoxViewModel';

export function InputBox({set, value}: TInputBox) {
  const {onChange, refs} = useInputBoxViewModel({set, value});

  return <InputBoxView onChange={onChange} refs={refs} />;
}
