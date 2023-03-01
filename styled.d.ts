import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
    };
    fonts: {
      xLarge: {
        'font-size': string;
        'font-weight': string;
        'font-family': string;
        color: string;
      };
    };
  }
}
