import React, {useEffect} from 'react';

import {LottieContainer, SplashContainer} from './styles';
import Lottie from 'lottie-react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TRouteSplash, TSplash} from './types';

export function Splash() {
  const {navigate} = useNavigation<TSplash>();
  const {params} = useRoute<TRouteSplash>();

  useEffect(() => {
    //Splash Screen is a screen to load all u need to load in this application
    setTimeout(() => {
      console.log(`[UBER] ready ✅ ${params.isReady}`);
      navigate('Welcome');
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
