import React from 'react';
import {DefaultTheme} from 'styled-components/native';

export type TInputCountry = {
  error?: string;
  set: React.Dispatch<React.SetStateAction<string>>;
  value: string;
};

export type TInputCountryView = {
  theme: DefaultTheme;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  handleOpenModal: () => void;
  value: string;
  error?: string;
};
