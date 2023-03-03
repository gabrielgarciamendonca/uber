import {GestureResponderEvent, PressableProps} from 'react-native';

export type TButton = {
  title: string;
  error?: boolean;
} & PressableProps;

export type TButtonView = {
  style: {
    transform: {
      scale: number;
    }[];
  };
  styleDisabled: {
    backgroundColor: string;
  };
  onPressIn: (event: GestureResponderEvent) => void;
  onPressOut: (event: GestureResponderEvent) => void;
  styleOpacity: {
    transform: {
      scale: number;
    }[];
    left: number;
    top: number;
  };
} & TButton;
