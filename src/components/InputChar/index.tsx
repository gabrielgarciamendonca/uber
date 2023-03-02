import React from 'react';
import {TextInput} from 'react-native';
import {useTheme} from 'styled-components/native';
import {InputCharContainer} from './styles';
import {TInputChar} from './types';

export const InputChar = React.forwardRef(
  ({...rest}: TInputChar, ref: React.Ref<TextInput>) => {
    const {colors} = useTheme();

    return (
      <InputCharContainer
        {...rest}
        maxLength={1}
        ref={ref}
        selectionColor={colors.secondary}
      />
    );
  },
);
