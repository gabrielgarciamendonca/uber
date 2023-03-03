import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {z} from 'zod';
import {TOnboardingStack} from '../../../providers/Routes/Onboarding/types';

export type TPhone = NativeStackNavigationProp<TOnboardingStack, 'Phone'>;

export type TPhoneView = {
  phoneSchema: z.ZodEffects<z.ZodString, string, string>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  countryCode: string;
  setCountryCode: React.Dispatch<React.SetStateAction<string>>;
  handleConfirm: () => void;
};
