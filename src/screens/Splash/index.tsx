import React from 'react';

import { LottieContainer, SplashContainer } from './styles';
import Lottie from 'lottie-react-native';
import { useSplashViewModel } from './useSplashViewModel';

export function Splash() {
  useSplashViewModel();

  return (
    <SplashContainer>
      <LottieContainer>
        <Lottie
          source={require('../../assets/lotties/splash.json')}
          autoPlay
          loop
        />
      </LottieContainer>
    </SplashContainer>
  );
}
