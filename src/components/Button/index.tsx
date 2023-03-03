import React from 'react';

import {
  ButtonContainer,
  ButtonTitle,
  ButtonContent,
  ButtonOpacityCircle,
} from './styles';
import { TButton } from './types';
import { useButtonViewModel } from './useButtonViewModel';

export function Button({ title, error, ...rest }: TButton) {
  const { onPressIn, onPressOut, style, styleOpacity, styleDisabled } = useButtonViewModel({ error, ...rest });

  return (
    <ButtonContainer
      {...rest}
      style={[style, styleDisabled]}
      onPressIn={onPressIn}
      disabled={error}
      onPressOut={onPressOut}>
      <ButtonContent>
        <ButtonOpacityCircle style={styleOpacity} />
        <ButtonTitle>{title}</ButtonTitle>
      </ButtonContent>
    </ButtonContainer>
  );
}
