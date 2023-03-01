import React from 'react';
import {useBackButtonToExit} from '../../hooks/useBackButtonToExit';

import {WelcomeContainer, WelcomeTitle} from './styles';

export function Welcome() {
  useBackButtonToExit();
  return (
    <WelcomeContainer>
      <WelcomeTitle>UBER</WelcomeTitle>
    </WelcomeContainer>
  );
}
