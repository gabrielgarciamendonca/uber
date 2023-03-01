import {DefaultTheme} from 'styled-components/native';

export const theme: Record<'dark' | 'light', DefaultTheme> = {
  dark: {
    colors: {
      primary: '#0D1724',
    },
    fonts: {
      xLarge: {
        'font-size': '32px',
        'font-weight': '500',
        'font-family': 'Poppins',
        color: '#FFF',
      },
    },
  },
  light: {
    colors: {
      primary: '#FFF',
    },
    fonts: {
      xLarge: {
        'font-size': '32px',
        'font-weight': '500',
        'font-family': 'Poppins',
        color: '#0D1724',
      },
    },
  },
};
