import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TOnboardingStack} from '../../../providers/Routes/Onboarding/types';
import {TStack} from '../../../providers/Routes/types';

export type TRouteConfirmation = RouteProp<TOnboardingStack, 'Confirmation'>;
export type TConfirmation = NativeStackNavigationProp<
  TStack & TOnboardingStack,
  'Confirmation'
>;

export type TConfirmationView = {
  route: TRouteConfirmation;
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  handleConfirm: () => void;
};
