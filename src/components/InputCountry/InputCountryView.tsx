import React from 'react';
import {CountryPicker} from 'react-native-country-codes-picker';
import {CountryItem} from './CountryItem';
import {InputCountryContainer, InputCountryText} from './styles';
import {TInputCountryView} from './types';

export function InputCountryView({
  handleOpenModal,
  open,
  setOpen,
  theme: {colors},
  error,
  value,
  setCountry,
}: TInputCountryView) {
  return (
    <InputCountryContainer onPress={handleOpenModal} error={error}>
      <InputCountryText>{value}</InputCountryText>
      <CountryPicker
        lang="pt"
        onBackdropPress={() => setOpen(false)}
        show={open}
        inputPlaceholder="Select the country code"
        itemTemplate={CountryItem}
        style={{
          line: {
            backgroundColor: colors.tertiaryLight,
          },
          modal: {
            height: '60%',
            backgroundColor: colors.tertiary,
          },
        }}
        pickerButtonOnPress={item => {
          setCountry(item.dial_code);
          setOpen(false);
        }}
      />
    </InputCountryContainer>
  );
}
