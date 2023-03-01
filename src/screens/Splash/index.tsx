import React, {useEffect} from 'react';

import {LottieContainer, SplashContainer} from './styles';
import Lottie from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {TSplash} from './types';

export function Splash() {
  const {navigate} = useNavigation<TSplash>();

  useEffect(() => {
    setTimeout(() => navigate('Welcome'), 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SplashContainer>
      <LottieContainer>
        <Lottie
          source={require('../../assets/lotties/splash.json')}
          autoPlay
          loop
          colorFilters={[{color: '#FFF', keypath: 'Stroke 1'}]}
        />
      </LottieContainer>
    </SplashContainer>
  );
}
