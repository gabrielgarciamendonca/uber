import React from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';

export type TInputBox = {
  set: React.Dispatch<React.SetStateAction<string>>;
  value: string;
};

export type TInputBoxView = {
  onChange: (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    position: number,
  ) => void;
  refs: React.RefObject<TextInput>[];
};
