import React, {useCallback} from 'react';

import {z} from 'zod';
import {isPhone} from 'brazilian-values';
import {useNavigation} from '@react-navigation/native';
import {TPhone} from './types';

const phoneSchema = z.string().refine(isPhone);

export function usePhoneViewModel() {
  const [phone, setPhone] = React.useState('');
  const [error, setError] = React.useState('');
  const [countryCode, setCountryCode] = React.useState('+55');
  const {navigate} = useNavigation<TPhone>();

  const handleConfirm = useCallback(() => {
    navigate('Confirmation', {
      sendTo: `${countryCode} ${phone}`,
      type: 'phone',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phone, countryCode]);

  return {
    phoneSchema,
    phone,
    setPhone,
    error,
    setError,
    countryCode,
    setCountryCode,
    handleConfirm,
  };
}
