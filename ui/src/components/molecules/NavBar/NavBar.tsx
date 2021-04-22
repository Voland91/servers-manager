import { FC } from 'react';
import Text from '../../atoms/Text/Text';
import { StyledNavBarWrapper, StyledNavBar } from './NavBar.styles';
import Icon from '../../atoms/Icon/Icon';
import StyledLine from '../../atoms/Line/Line.styles';

const NavBar: FC = () => (
  <StyledNavBarWrapper>
    <StyledNavBar>
      <Icon icon="circle" circle />
      <Text webtitle>Recruitment task</Text>
      <StyledLine />
    </StyledNavBar>
  </StyledNavBarWrapper>
);

export default NavBar;
