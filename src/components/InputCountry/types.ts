import React from 'react';

export type TInputCountry = {
    error?: string;
    set: React.Dispatch<React.SetStateAction<string>>;
    value: string;
}
