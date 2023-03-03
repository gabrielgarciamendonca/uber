import React from 'react';

import {usePhoneViewModel} from './usePhoneViewModel';
import {PhoneView} from './PhoneView';

export function Phone() {
  const {
    countryCode,
    error,
    handleConfirm,
    phone,
    phoneSchema,
    setCountryCode,
    setError,
    setPhone,
  } = usePhoneViewModel();
  return (
    <PhoneView
      countryCode={countryCode}
      error={error}
      handleConfirm={handleConfirm}
      phone={phone}
      phoneSchema={phoneSchema}
      setCountryCode={setCountryCode}
      setError={setError}
      setPhone={setPhone}
    />
  );
}
