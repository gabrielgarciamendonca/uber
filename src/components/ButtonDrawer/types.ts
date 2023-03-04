import { GestureResponderEvent, PressableProps } from 'react-native';

export type TButtonDrawer = {
  children: JSX.Element[] | JSX.Element
} & PressableProps;

export type TButtonDrawerView = {
  style: {
    transform: {
      scale: number;
    }[];
  };
  onPressIn: (event: GestureResponderEvent) => void;
  onPressOut: (event: GestureResponderEvent) => void;
} & TButtonDrawer;
