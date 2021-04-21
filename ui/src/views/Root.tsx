import GlobalStyle from '../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/mainTheme';
import Header from '../components/atoms/Header/Header';
import Text from '../components/atoms/Text/Text';
import SearchBar from '../components/molecules/SearchBar/SearchBar';

const Root: React.FC = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Header>header</Header>
      <Text>server name</Text>
      <SearchBar />
    </ThemeProvider>
  </>
);

export default Root;
