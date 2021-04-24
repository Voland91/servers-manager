import { FC } from 'react';
import Headers from '../../atoms/Headers/Headers';
import StyledHeaders from './Header.styles';

interface HeaderProps {
  length: number | undefined;
}

const Header: FC<HeaderProps> = ({ length }) => (
  <StyledHeaders>
    <Headers type="h1">Servers</Headers>
    <Headers type="h2">{`Number of elements: ${length !== undefined ? length : '0'}`}</Headers>
  </StyledHeaders>
);

export default Header;
