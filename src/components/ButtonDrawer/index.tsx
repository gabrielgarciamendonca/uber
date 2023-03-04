import React from 'react';
import { ButtonDrawerView } from './ButtonDrawerView';

import { TButtonDrawer } from './types';
import { useButtonDrawerViewModel } from './useButtonDrawerViewModel';

export function ButtonDrawer({ ...rest }: TButtonDrawer) {
  const { onPressIn, onPressOut, style } =
    useButtonDrawerViewModel({ ...rest });

  return (
    <ButtonDrawerView
      {...rest}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={style}
    />
  );
}
