import {MaskInputProps} from 'react-native-mask-input';

export type TInput = {
  placeholder: string;
  error?: string;
} & MaskInputProps;

export const inputMasks = {
  phone: [
    '(',
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ],
};
