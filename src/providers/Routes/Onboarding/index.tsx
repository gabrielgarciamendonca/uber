import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Confirmation } from '../../../screens/Onboarding/Confirmation';
import { Phone } from '../../../screens/Onboarding/Phone';
import { TOnboardingStack } from './types';

const OnboardingStack = createNativeStackNavigator<TOnboardingStack>();

export function Onboarding() {

  return (
    <OnboardingStack.Navigator initialRouteName='Phone'>
      <OnboardingStack.Screen
        name="Confirmation"
        initialParams={{ sendTo: '', type: 'none' }}
        component={Confirmation}
        options={{ headerShown: false }}
      />
      <OnboardingStack.Screen
        name="Phone"
        component={Phone}
        options={{ headerShown: false }}
      />

    </OnboardingStack.Navigator>
  );
}
