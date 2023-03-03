import React, { useCallback } from 'react';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { inputMasks } from '../../../components/Input/types';
import { InputCountry } from '../../../components/InputCountry';

import { PhoneContainer, PhoneContent, PhoneDescription, PhoneDescriptionBlue, PhoneInputContainer, PhoneInputHorizontal, PhoneTitle } from './styles';

import { z, ZodError } from "zod";
import { isPhone } from 'brazilian-values';
import { Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TPhone } from './types';

const phoneSchema = z.string().refine(isPhone);

export function Phone() {
    const [phone, setPhone] = React.useState("");
    const [error, setError] = React.useState("");
    const [countryCode, setCountryCode] = React.useState('+55');
    const { navigate } = useNavigation<TPhone>();

    const handleConfirm = useCallback(() => {
        navigate('Confirmation', { sendTo: `${countryCode} ${phone}`, type: 'phone' })
    }, [phone, countryCode])

    return (
        <PhoneContent onPress={Keyboard.dismiss}>
            <PhoneContainer>
                <PhoneTitle>Enter your phone number</PhoneTitle>
                <PhoneInputContainer>
                    <PhoneInputHorizontal>
                        <InputCountry set={setCountryCode} value={countryCode} error={error} />
                        <Input
                            value={phone}
                            onChangeText={(masked) => {
                                setPhone(masked);

                                try {
                                    phoneSchema.parse(masked);
                                    setError("")
                                } catch (e) {
                                    setError((e as ZodError).errors[0].message)
                                }
                            }}
                            mask={inputMasks.phone}
                            placeholder='Digite seu número de celular'
                            keyboardType='number-pad'
                            placeholderTextColor={'#FFFFFF1F'}
                            error={error}
                        />
                    </PhoneInputHorizontal>
                    <PhoneDescription>
                        By countinuing, I confirm I have read the <PhoneDescriptionBlue>Privacy Policy</PhoneDescriptionBlue>
                    </PhoneDescription>
                </PhoneInputContainer>
                <Button title='Accept & Continue' error={Boolean(error) || !Boolean(phone)} onPress={handleConfirm} />
            </PhoneContainer>
        </PhoneContent>
    );
}
