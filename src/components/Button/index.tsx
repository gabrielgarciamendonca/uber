import React from 'react';
import {ButtonView} from './ButtonView';

import {TButton} from './types';
import {useButtonViewModel} from './useButtonViewModel';

export function Button({title, error, ...rest}: TButton) {
  const {onPressIn, onPressOut, style, styleOpacity, styleDisabled} =
    useButtonViewModel({error, ...rest});

  return (
    <ButtonView
      {...rest}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={style}
      styleDisabled={styleDisabled}
      styleOpacity={styleOpacity}
      title={title}
      error={error}
    />
  );
}
