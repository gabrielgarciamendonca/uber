import { useNavigation, useRoute } from '@react-navigation/native';
import { useCallback, useState } from 'react';

import { TConfirmation, TRouteConfirmation } from './types';

export function useConfirmationViewModel() {
  const route = useRoute<TRouteConfirmation>();
  const [code, setCode] = useState('@@@@');
  const { replace } = useNavigation<TConfirmation>();

  const handleConfirm = useCallback(() => {
    replace('Main');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    route,
    code,
    setCode,
    handleConfirm,
  };
}
