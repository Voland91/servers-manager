import { FC } from 'react';
import Headers from '../../atoms/Headers/Headers';
import { StyledHeaderWrapper, StyledHeaders } from './Header.styles';
import SearchBar from '../SearchBar/SearchBar';

const Header: FC = () => (
  <StyledHeaderWrapper>
    <StyledHeaders>
      <Headers type="h1">Servers</Headers>
      <Headers type="h2">Number of elements: 16</Headers>
    </StyledHeaders>
    <SearchBar />
  </StyledHeaderWrapper>
);

export default Header;
