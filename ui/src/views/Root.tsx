import GlobalStyle from "../theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "../theme/mainTheme";

const Root = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <p>asda</p>
    </ThemeProvider>
  </>
);

export default Root;
