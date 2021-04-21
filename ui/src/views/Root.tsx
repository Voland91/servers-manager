import GlobalStyle from '../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/mainTheme';
import Text from '../components/atoms/Text/Text';

const Root: React.FC = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Text>asda</Text>
    </ThemeProvider>
  </>
);

export default Root;
