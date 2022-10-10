import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      socialIcon: string;
      text: {
        primary: string;
        secondary: string;
      };
      hover: {
        onPrimary: string;
        onSecondary: string;
        onWhite: string;
        onBlack: string;
      }
    };
    breakpoints: {
      s: string;
      m: string;
      l: string;
      footer: string;
    }
  }
}
