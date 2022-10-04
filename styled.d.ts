import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: {
        primary: string;
        secondary: string;
      };
    };
    breakpoints: {
      s: string,
      m: string,
      l: string,
    }
  }
}
