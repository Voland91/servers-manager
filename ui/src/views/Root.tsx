import GlobalStyle from '../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/mainTheme';
import NavBar from '../components/molecules/NavBar/NavBar';
import Headers from '../components/atoms/Headers/Headers';
import Text from '../components/atoms/Text/Text';
import SearchBar from '../components/molecules/SearchBar/SearchBar';

const Root: React.FC = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <NavBar />
      <Headers type="h1">header1</Headers>
      <Headers type="h2">header2</Headers>
      <Headers type="h3">header3</Headers>
      <Text>server name</Text>
      <SearchBar />
    </ThemeProvider>
  </>
);

export default Root;
