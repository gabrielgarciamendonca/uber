import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
    };
    fonts: {
      xLarge: {
        'font-size': string;
        'font-weight': string;
        'font-family': string;
        color: string;
      };
      largeMedium: {
        'font-size': string;
        'font-weight': string;
        'font-family': string;
        color: string;
      };
      medium: {
        'font-size': string;
        'font-weight': string;
        'font-family': string;
        color: string;
      };
    };
  }
}
