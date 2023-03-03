import React from 'react';
import {ConfirmationView} from './ConfirmationView';

import {useConfirmationViewModel} from './useConfirmationViewModel';

export function Confirmation() {
  const {code, handleConfirm, route, setCode} = useConfirmationViewModel();

  return (
    <ConfirmationView
      code={code}
      handleConfirm={handleConfirm}
      route={route}
      setCode={setCode}
    />
  );
}
