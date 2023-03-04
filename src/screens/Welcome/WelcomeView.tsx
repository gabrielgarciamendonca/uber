import React from 'react';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { TranslateX } from '../../components/TranslateX';
import { TranslateY } from '../../components/TranslateY';

import {
  WelcomeContainer,
  WelcomeBanner,
  WelcomeTitleBanner,
  WelcomeDescribeBanner,
  WelcomeCar,
  WelcomeLabels,
  WelcomeButtonContainer,
} from './styles';
import { TWelcomeView } from './types';

export function WelcomeView({
  theme,
  handleContinue,
  hideStatusBarConfig,
  shared,
}: TWelcomeView) {
  return (
    <WelcomeContainer>
      {!hideStatusBarConfig && (
        <StatusBar
          animated
          backgroundColor={theme.colors.secondary}
          translucent
        />
      )}
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
      <WelcomeButtonContainer>
        <Button title="Get Started" onPress={handleContinue} />
      </WelcomeButtonContainer>
    </WelcomeContainer>
  );
}
