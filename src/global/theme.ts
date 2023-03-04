import { DefaultTheme } from 'styled-components/native';

export const theme: Record<'dark' | 'light', DefaultTheme> = {
  dark: {
    colors: {
      primary: '#0D1724',
      secondary: '#514BC3',
      secondaryLight: '#4048BF',
      tertiary: '#1A1A1A',
      tertiaryLight: '#2A2A2A',
      error: '#FF3333',
      disabled: '#514BC32F'
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
      medium2: {
        'font-size': '18px',
        'font-weight': '500',
        'font-family': 'Poppins',
        color: '#FFF',
      },
      medium: {
        'font-size': '14px',
        'font-weight': '400',
        'font-family': 'Poppins',
        color: '#FFF',
      },
      small: {
        'font-size': '12px',
        'font-weight': '400',
        'font-family': 'Poppins',
        color: '#FFF',
      },
    },
  },
  light: {
    colors: {
      primary: '#FFF',
      secondary: '#514BC3',
      secondaryLight: '#4048BF',
      tertiary: '#58517B',
      tertiaryLight: '#2A2A2A',
      error: '#FF3333',
      disabled: '#514BC32F'
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
      medium2: {
        'font-size': '18px',
        'font-weight': '500',
        'font-family': 'Poppins',
        color: '#FFF',
      },
      medium: {
        'font-size': '14px',
        'font-weight': '400',
        'font-family': 'Poppins',
        color: '#0D1724',
      },
      small: {
        'font-size': '12px',
        'font-weight': '400',
        'font-family': 'Poppins',
        color: '#FFF',
      },
    },
  },
};
