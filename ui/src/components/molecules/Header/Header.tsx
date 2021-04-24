import { FC } from 'react';
import Headers from '../../atoms/Headers/Headers';
import { StyledHeaderWrapper, StyledHeaders } from './Header.styles';
import SearchBar from '../SearchBar/SearchBar';

interface HeaderProps {
  length: number | undefined;
}

const Header: FC<HeaderProps> = ({ length }) => (
  <StyledHeaderWrapper>
    <StyledHeaders>
      <Headers type="h1">Servers</Headers>
      <Headers type="h2">{`Number of elements: ${length !== undefined ? length : '0'}`}</Headers>
    </StyledHeaders>
    <SearchBar />
  </StyledHeaderWrapper>
);

export default Header;
