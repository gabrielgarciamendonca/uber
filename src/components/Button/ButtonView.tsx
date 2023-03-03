import React from 'react';

import {
  ButtonContainer,
  ButtonTitle,
  ButtonContent,
  ButtonOpacityCircle,
} from './styles';
import {TButtonView} from './types';

export function ButtonView({
  error,
  title,
  style,
  styleDisabled,
  onPressIn,
  onPressOut,
  styleOpacity,
  ...rest
}: TButtonView) {
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
