import {SharedValue} from 'react-native-reanimated';

export type TTranslateX = {
  where: number;
  from: number;
  shared: SharedValue<number>;
  children: JSX.Element;
};
