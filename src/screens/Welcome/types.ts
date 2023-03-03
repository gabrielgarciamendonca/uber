import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SharedValue} from 'react-native-reanimated';
import {DefaultTheme} from 'styled-components/native';

import {TStack} from '../../providers/Routes/types';

export type TWelcome = NativeStackNavigationProp<TStack, 'Welcome'>;

export type TWelcomeView = {
  theme: DefaultTheme;
  handleContinue: () => void;
  hideStatusBarConfig: boolean;
  shared: SharedValue<number>;
};

export type TUseWelcomeViewModel = {
  useWelcomeViewModel: () => TWelcomeView;
};
