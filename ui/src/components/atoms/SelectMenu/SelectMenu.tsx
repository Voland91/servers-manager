import { FC } from 'react';
import { StyledMenuWrapper, StyledUl, StyledLi } from './SelectMenu.styles';

interface SelectMenuProps {
  status: string;
  isOpen: boolean;
  handleChooseOption: React.MouseEventHandler<HTMLElement>;
  id: number;
}

const SelectMenu: FC<SelectMenuProps> = ({ status, isOpen, handleChooseOption, id }) => (
  <StyledMenuWrapper open={isOpen}>
    <StyledUl>
      {status === 'ONLINE' && (
        <>
          <StyledLi onClick={handleChooseOption} id={id.toString()} title={'off'}>
            Turn off
          </StyledLi>
          <StyledLi onClick={handleChooseOption} id={id.toString()} title={'reboot'}>
            Reboot
          </StyledLi>
        </>
      )}

      {status === 'OFFLINE' && (
        <>
          <StyledLi onClick={handleChooseOption} id={id.toString()} title={'on'}>
            Turn on
          </StyledLi>
        </>
      )}
    </StyledUl>
  </StyledMenuWrapper>
);

export default SelectMenu;
