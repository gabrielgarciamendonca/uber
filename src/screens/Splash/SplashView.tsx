import React from 'react';

import {LottieContainer, SplashContainer} from './styles';
import Lottie from 'lottie-react-native';

export function SplashView() {
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
