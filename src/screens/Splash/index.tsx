import React from 'react';

import {SplashView} from './SplashView';
import {useSplashViewModel} from './useSplashViewModel';

export function Splash() {
  useSplashViewModel();

  return <SplashView />;
}
