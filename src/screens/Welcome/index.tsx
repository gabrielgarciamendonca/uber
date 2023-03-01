import React from 'react';
import {StatusBar} from 'react-native';
import {useBackButtonToExit} from '../../hooks/useBackButtonToExit';

import {
  WelcomeContainer,
  WelcomeBanner,
  WelcomeTitleBanner,
  WelcomeDescribeBanner,
  // WelcomeCar,
} from './styles';

export function Welcome() {
  useBackButtonToExit();

  return (
    <WelcomeContainer>
      <StatusBar animated backgroundColor={'#A100ff'} translucent />
      <WelcomeBanner>
        <WelcomeTitleBanner>UBER</WelcomeTitleBanner>
        <WelcomeDescribeBanner>Get there</WelcomeDescribeBanner>
        {/* <WelcomeCar source={{uri: ''}} /> */}
      </WelcomeBanner>
    </WelcomeContainer>
  );
}
