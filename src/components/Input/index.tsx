import React from 'react';
import { InputContainer } from './styles';
import { TInput } from './types';

export function Input({ error, ...rest }: TInput) {
    return (
        <InputContainer error={error} {...rest} />
    );
}
