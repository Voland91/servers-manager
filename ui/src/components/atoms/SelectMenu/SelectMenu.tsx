import { FC } from 'react';
import { StyledMenuWrapper, StyledUl, StyledLi } from './SelectMenu.styles';

interface SelectMenuProps {
  status: string;
  isOpen: boolean;
}

const SelectMenu: FC<SelectMenuProps> = ({ status, isOpen }) => (
  <StyledMenuWrapper open={isOpen}>
    <StyledUl>
      {status === 'ONLINE' && (
        <>
          <StyledLi>Turn off</StyledLi>
          <StyledLi>Reboot</StyledLi>
        </>
      )}

      {status === 'OFFLINE' && (
        <>
          <StyledLi>Turn on</StyledLi>
          <StyledLi>Reboot</StyledLi>
        </>
      )}
    </StyledUl>
  </StyledMenuWrapper>
);

export default SelectMenu;
