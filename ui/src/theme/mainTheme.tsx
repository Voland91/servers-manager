import { DefaultTheme } from 'styled-components';

const mainTheme: DefaultTheme = {
  colors: {
    dark: '#494E61',
    gray: '#A9AEC1',
    grayLight: '#D4D7E1',
    grayBlue: '#9CA7D3',
    grayDark: '#757B8F',
    white: '#fff',
    light: '#EDEDF0',
    lightBg: '#F2F3F6',
    green: '#24A1A9',
    greenLight: '#33CAD4',
    red: '#EA5885',
    purple: '#7D82F7',
  },

  fontWeights: {
    regular: '400',
    semiBold: '600',
    bold: '700',
  },

  fontSizes: {
    xs: '12px',
    s: '13px',
    m: '14px',
    l: '15px',
    xl: '21px',
  },

  fontFamilies: {
    primary: "'Open Sans', sans-serif",
    secondary: "'Montserrat', sans-serif",
  },
};

export default mainTheme;
