import React from 'react';

import { LottieContainer, LoadingContainer } from './styles';
import Lottie from 'lottie-react-native';

export function LoadingView() {
  return (
    <LoadingContainer>
      <LottieContainer>
        <Lottie
          source={require('../../assets/lotties/loading.json')}
          autoPlay
          loop
        />
      </LottieContainer>
    </LoadingContainer>
  );
}
