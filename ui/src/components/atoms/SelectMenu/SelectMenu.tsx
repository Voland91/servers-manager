import { FC } from 'react';
import { StyledMenuWrapper, StyledUl, StyledLi } from './SelectMenu.styles';

interface SelectMenuProps {
  status: string;
  isOpen: boolean;
  handleClickOption: React.MouseEventHandler<HTMLElement>;
}

const SelectMenu: FC<SelectMenuProps> = ({ status, isOpen, handleClickOption }) => (
  <StyledMenuWrapper open={isOpen}>
    <StyledUl>
      {status === 'ONLINE' && (
        <>
          <StyledLi onClick={handleClickOption}>Turn off</StyledLi>
          <StyledLi onClick={handleClickOption}>Reboot</StyledLi>
        </>
      )}

      {status === 'OFFLINE' && (
        <>
          <StyledLi onClick={handleClickOption}>Turn on</StyledLi>
          <StyledLi onClick={handleClickOption}>Reboot</StyledLi>
        </>
      )}
    </StyledUl>
  </StyledMenuWrapper>
);

export default SelectMenu;
