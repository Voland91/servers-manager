import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      dark: string;
      gray: string;
      grayLight: string;
      grayBlue: string;
      grayDark: string;
      white: string;
      light: string;
      lightBg: string;
      green: string;
      greenLight: string;
      red: string;
      purple: string;
    };

    fontWeights: {
      regular: string;
      semiBold: string;
      bold: string;
    };

    fontSizes: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
    };

    fontFamilies: {
      primary: string;
      secondary: string;
    };
  }
}
