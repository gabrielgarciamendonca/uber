import React from 'react';

import {
  ButtonDrawerContainer
} from './styles';
import { TButtonDrawerView } from './types';

export function ButtonDrawerView({
  style,
  onPressIn,
  onPressOut,
  children,
  ...rest
}: TButtonDrawerView) {
  return (
    <ButtonDrawerContainer
      {...rest}
      style={style}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      {children}
    </ButtonDrawerContainer>
  );
}
