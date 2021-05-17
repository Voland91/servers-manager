import { FC } from 'react';
import StyledButton from './Button.styles';
import { ReactComponent as DotsIcon } from '../../../assets/icons/dots.svg';

interface ButtonProps {
  handleOpenMenu?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ handleOpenMenu, disabled }) => (
  <StyledButton onClick={handleOpenMenu} disabled={disabled}>
    <DotsIcon />
  </StyledButton>
);

export default Button;
