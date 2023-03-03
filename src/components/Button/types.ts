import { PressableProps } from 'react-native';

export type TButton = {
  title: string;
  error?: string;
} & PressableProps;
