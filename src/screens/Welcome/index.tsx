import React from 'react';

import {useWelcomeViewModel} from './useWelcomeViewModel';
import {WelcomeView} from './WelcomeView';

export function Welcome() {
  const {theme, handleContinue, hideStatusBarConfig, shared} =
    useWelcomeViewModel();

  return (
    <WelcomeView
      theme={theme}
      shared={shared}
      handleContinue={handleContinue}
      hideStatusBarConfig={hideStatusBarConfig}
    />
  );
}
