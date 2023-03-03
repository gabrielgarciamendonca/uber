import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Button } from '../../../components/Button';
import { InputBox } from '../../../components/InputBox';

import { ConfirmationContainer, ConfirmationTitle, ConfirmationTitleContainer } from './styles';
import { TConfirmation, TRouteConfirmation } from './types';

export function Confirmation() {
    const { params } = useRoute<TRouteConfirmation>();
    const [code, setCode] = useState('@@@@');
    const { navigate } = useNavigation<TConfirmation>();

    const handleConfirm = useCallback(() => {
        navigate('Welcome')
    }, []);

    return (
        <ConfirmationContainer>
            <ConfirmationTitleContainer>
                <ConfirmationTitle>A code has been sent to</ConfirmationTitle>
                <ConfirmationTitle>{params.sendTo}</ConfirmationTitle>
            </ConfirmationTitleContainer>
            <InputBox set={setCode} value={code} />
            <Button title='Next' onPress={handleConfirm} />
        </ConfirmationContainer>
    );
}
