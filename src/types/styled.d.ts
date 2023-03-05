import 'styled-components';

type TFont = {
  'font-size': string;
  'font-weight': string;
  'font-family': string;
  color: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      secondaryLight: string;
      tertiary: string;
      tertiaryOpacity: string;
      tertiaryLight: string;
      error: string;
      disabled: string;
    };
    fonts: {
      xLarge: TFont;
      largeMedium: TFont;
      medium: TFont;
      medium2: TFont;
      small: TFont;
    };
  }
}
