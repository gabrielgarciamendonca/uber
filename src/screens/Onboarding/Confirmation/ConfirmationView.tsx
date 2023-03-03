import React from 'react';
import {Button} from '../../../components/Button';
import {InputBox} from '../../../components/InputBox';

import {
  ConfirmationContainer,
  ConfirmationTitle,
  ConfirmationTitleContainer,
} from './styles';
import {TConfirmationView} from './types';

export function ConfirmationView({
  code,
  handleConfirm,
  route: {params},
  setCode,
}: TConfirmationView) {
  return (
    <ConfirmationContainer>
      <ConfirmationTitleContainer>
        <ConfirmationTitle>A code has been sent to</ConfirmationTitle>
        <ConfirmationTitle>{params.sendTo}</ConfirmationTitle>
      </ConfirmationTitleContainer>
      <InputBox set={setCode} value={code} />
      <Button title="Next" onPress={handleConfirm} />
    </ConfirmationContainer>
  );
}
