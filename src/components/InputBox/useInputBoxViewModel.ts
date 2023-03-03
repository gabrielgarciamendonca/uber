import { useCallback, useEffect, useRef } from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';
import { TInputBox } from './types';

export function useInputBoxViewModel({ set, value }: TInputBox) {
  const refInput1 = useRef<TextInput>(null);
  const refInput2 = useRef<TextInput>(null);
  const refInput3 = useRef<TextInput>(null);
  const refInput4 = useRef<TextInput>(null);

  const getFocus = useCallback((position: number) => {
    switch (position) {
      case 0:
        refInput1.current?.focus();
        break;
      case 1:
        refInput2.current?.focus();
        break;
      case 2:
        refInput3.current?.focus();
        break;
      case 3:
        refInput4.current?.focus();
        break;
      default:
        break;
    }
  }, []);

  useEffect(() => {
    for (let i = 0; i < value.length; i += 1) {
      if (value[i] === '@') {
        getFocus(i);
        break;
      }
    }
  }, [getFocus, value]);

  const onBackSpacePressed = useCallback(
    (e: NativeSyntheticEvent<TextInputKeyPressEventData>, position: number) => {
      var positionFormatted = position;
      const char = e.nativeEvent.key === 'Backspace' ? '@' : e.nativeEvent.key;

      if (value[positionFormatted] !== '@') {
        if (positionFormatted > 0 && e.nativeEvent.key === 'Backspace') {
          if (value[positionFormatted] === '@') {
            getFocus(positionFormatted + 1);
          }
        }
      }

      if (positionFormatted > 0 && e.nativeEvent.key === 'Backspace') {
        if (value[positionFormatted] === '@') {
          getFocus(positionFormatted - 1);
        }
      }
      set(oldState => oldState.replaceAt(positionFormatted, char));
    },
    [value, set, getFocus],
  );

  return {
    refs: [refInput1, refInput2, refInput3, refInput4],
    onChange: onBackSpacePressed,
  };
}
