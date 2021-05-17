import GlobalStyle from '../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/mainTheme';
import NavBar from '../components/molecules/NavBar/NavBar';
import ServersList from '../components/organisms/ServersList/ServersList';

const Root: React.FC = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <NavBar />
      <ServersList />
    </ThemeProvider>
  </>
);

export default Root;
