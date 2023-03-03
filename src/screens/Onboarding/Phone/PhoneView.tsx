import React from 'react';
import {Button} from '../../../components/Button';
import {Input} from '../../../components/Input';
import {inputMasks} from '../../../components/Input/types';
import {InputCountry} from '../../../components/InputCountry';

import {
  PhoneContainer,
  PhoneContent,
  PhoneDescription,
  PhoneDescriptionBlue,
  PhoneInputContainer,
  PhoneInputHorizontal,
  PhoneTitle,
} from './styles';

import {Keyboard} from 'react-native';
import {ZodError} from 'zod';
import {TPhoneView} from './types';

export function PhoneView({
  countryCode,
  error,
  handleConfirm,
  phone,
  phoneSchema,
  setCountryCode,
  setError,
  setPhone,
}: TPhoneView) {
  return (
    <PhoneContent onPress={Keyboard.dismiss}>
      <PhoneContainer>
        <PhoneTitle>Enter your phone number</PhoneTitle>
        <PhoneInputContainer>
          <PhoneInputHorizontal>
            <InputCountry
              set={setCountryCode}
              value={countryCode}
              error={error}
            />
            <Input
              value={phone}
              onChangeText={masked => {
                setPhone(masked);

                try {
                  phoneSchema.parse(masked);
                  setError('');
                } catch (e) {
                  setError((e as ZodError).errors[0].message);
                }
              }}
              mask={inputMasks.phone}
              placeholder="Digite seu número de celular"
              keyboardType="number-pad"
              placeholderTextColor={'#FFFFFF1F'}
              error={error}
            />
          </PhoneInputHorizontal>
          <PhoneDescription>
            By countinuing, I confirm I have read the{' '}
            <PhoneDescriptionBlue>Privacy Policy</PhoneDescriptionBlue>
          </PhoneDescription>
        </PhoneInputContainer>
        <Button
          title="Accept & Continue"
          error={Boolean(error) || !phone}
          onPress={handleConfirm}
        />
      </PhoneContainer>
    </PhoneContent>
  );
}
