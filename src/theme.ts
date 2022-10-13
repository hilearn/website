import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primary: '#EEBD20',
    secondary: 'rgba(238, 189, 32, 0.1)',
    background: '#F8F8F8',
    socialIcon: '#1C1C1C',
    text: {
      primary: '#1C1C1C',
      secondary: 'rgba(0, 0, 0, 0.6);',
    },
    hover: {
      onPrimary: '#D2A618',
      onSecondary: 'rgba(238, 189, 32, 0.2);',
      onWhite: '#E8E8E8',
      onBlack: '#EEBD20',
    }
  },
  breakpoints: {
    s: '375px',
    m: '768px',
    l: '1600px',
    footer: '860px',
    withImageBlock: '1320px',
    blockAlignCenter: '1000px'
  }
};

export default theme;
