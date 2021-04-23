import GlobalStyle from '../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/mainTheme';
import NavBar from '../components/molecules/NavBar/NavBar';
import Header from '../components/molecules/Header/Header';
import ListHeader from '../components/molecules/ListHeader/ListHeader';
import ListItem from '../components/molecules/ListItem/ListItem';

const Root: React.FC = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <NavBar />
      <Header />
      <ListHeader />
      <ListItem online />
      <ListItem offline />
      <ListItem reboot />
    </ThemeProvider>
  </>
);

export default Root;
