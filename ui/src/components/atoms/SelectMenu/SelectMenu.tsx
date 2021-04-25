import { FC } from 'react';
import { StyledMenuWrapper, StyledUl, StyledLi } from './SelectMenu.styles';

interface SelectMenuProps {
  status: string;
  isOpen: boolean;
  handleClickOption: React.MouseEventHandler<HTMLElement>;
  id: number;
}

const SelectMenu: FC<SelectMenuProps> = ({ status, isOpen, handleClickOption, id }) => (
  <StyledMenuWrapper open={isOpen}>
    <StyledUl>
      {status === 'ONLINE' && (
        <>
          <StyledLi onClick={handleClickOption} id={id.toString()} title={'off'}>
            Turn off
          </StyledLi>
          <StyledLi onClick={handleClickOption} id={id.toString()} title={'reboot'}>
            Reboot
          </StyledLi>
        </>
      )}

      {status === 'OFFLINE' && (
        <>
          <StyledLi onClick={handleClickOption} id={id.toString()} title={'on'}>
            Turn on
          </StyledLi>
        </>
      )}
    </StyledUl>
  </StyledMenuWrapper>
);

export default SelectMenu;
