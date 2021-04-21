import { FC } from 'react';
import StyledHeader from './Header.styles';

interface HeaderProps {
  children: string;
}

const Header: FC<HeaderProps> = ({ children }) => <StyledHeader>{children}</StyledHeader>;

export default Header;
