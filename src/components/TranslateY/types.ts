import {SharedValue} from 'react-native-reanimated';

export type TTranslateY = {
  where: number;
  from: number;
  shared: SharedValue<number>;
  children: JSX.Element;
};
