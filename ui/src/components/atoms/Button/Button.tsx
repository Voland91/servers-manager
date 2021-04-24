import { FC } from 'react';
import StyledButton from './Button.styles';
import { ReactComponent as DotsIcon } from '../../../assets/icons/dots.svg';

interface ButtonProps {
  handleOpenMenu: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ handleOpenMenu }) => (
  <StyledButton onClick={handleOpenMenu}>
    <DotsIcon />
  </StyledButton>
);

export default Button;
