import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useSharedValue, withTiming } from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';
import { Button } from '../../components/Button';
import { TranslateX } from '../../components/TranslateX';
import { TranslateY } from '../../components/TranslateY';
import { useBackButtonToExit } from '../../hooks/useBackButtonToExit';

import {
  WelcomeContainer,
  WelcomeBanner,
  WelcomeTitleBanner,
  WelcomeDescribeBanner,
  WelcomeCar,
  WelcomeLabels,
} from './styles';
import { TWelcome } from './types';

export function Welcome() {
  useBackButtonToExit();
  const { colors } = useTheme();
  const { navigate } = useNavigation<TWelcome>();
  const shared = useSharedValue(0);
  const [hideStatusBarConfig, setHideStatusBarConfig] = useState(false);

  useEffect(() => {
    shared.value = withTiming(1, { duration: 1000 })
  }, []);

  const handleContinue = useCallback(() => {
    navigate('Onboarding')
  }, [])

  useFocusEffect(useCallback(() => {
    setHideStatusBarConfig(false);

    return () =>
      setHideStatusBarConfig(true);
  }, []))

  return (
    <WelcomeContainer>
      {!hideStatusBarConfig && <StatusBar animated backgroundColor={colors.secondary} translucent />}
      <WelcomeBanner>
        <TranslateY from={-80} where={0} shared={shared}>
          <WelcomeLabels>
            <WelcomeTitleBanner>Uber</WelcomeTitleBanner>
            <WelcomeDescribeBanner>Get there.</WelcomeDescribeBanner>
          </WelcomeLabels>
        </TranslateY>
        <TranslateX from={0} where={120} shared={shared}>
          <WelcomeCar source={require('../../assets/images/car.png')} />
        </TranslateX>
      </WelcomeBanner>
      <Button title='Get Started' onPress={handleContinue} />
    </WelcomeContainer>
  );
}
