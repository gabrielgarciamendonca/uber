import React from 'react';
import {InputCountryView} from './InputCountryView';
import {TInputCountry} from './types';
import {useInputCountryViewModel} from './useInputCountryViewModel';

export function InputCountry({set, value, error}: TInputCountry) {
  const {theme, handleOpenModal, open, setOpen} = useInputCountryViewModel();
  return (
    <InputCountryView
      error={error}
      handleOpenModal={handleOpenModal}
      open={open}
      setCountry={set}
      setOpen={setOpen}
      theme={theme}
      value={value}
    />
  );
}
