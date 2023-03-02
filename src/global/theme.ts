import { DefaultTheme } from 'styled-components/native';

export const theme: Record<'dark' | 'light', DefaultTheme> = {
  dark: {
    colors: {
      primary: '#0D1724',
      secondary: '#514BC3'
    },
    fonts: {
      xLarge: {
        'font-size': '52px',
        'font-weight': '500',
        'font-family': 'Poppins',
        color: '#FFF',
      },
      largeMedium: {
        'font-size': '24px',
        'font-weight': '400',
        'font-family': 'Poppins',
        color: '#FFF',
      },
      medium: {
        'font-size': '14px',
        'font-weight': '400',
        'font-family': 'Poppins',
        color: '#FFF',
      },
    },
  },
  light: {
    colors: {
      primary: '#FFF',
      secondary: '#514BC3'
    },
    fonts: {
      xLarge: {
        'font-size': '52px',
        'font-weight': '500',
        'font-family': 'Poppins',
        color: '#0D1724',
      },
      largeMedium: {
        'font-size': '24px',
        'font-weight': '400',
        'font-family': 'Poppins',
        color: '#0D1724',
      },
      medium: {
        'font-size': '14px',
        'font-weight': '400',
        'font-family': 'Poppins',
        color: '#0D1724',
      },
    },
  },
};
