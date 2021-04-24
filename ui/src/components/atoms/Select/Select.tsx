import { FC } from 'react';
import StyledSelectWrapper from './Select.styles';

const Select: FC = () => (
  <StyledSelectWrapper>
    <option value=""> </option>
    <option value="offline">Turn off</option>
    <option value="reboot">Reboot</option>
    <option value="online">Turn on</option>
  </StyledSelectWrapper>
);

export default Select;
