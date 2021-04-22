import { FC } from 'react';
import StyledSelectWrapper from './Select.styles';

const Select: FC = () => (
  <StyledSelectWrapper>
    <option value=""> </option>
    <option value="turn-off">Turn off</option>
    <option value="reboot">Reboot</option>
    <option value="turn-on">Turn on</option>
  </StyledSelectWrapper>
);

export default Select;
