import { FC } from 'react';
import Headers from '../../atoms/Headers/Headers';
import { StyledListHeaderWrapper, StyledNameWrapper } from './ListHeader.styles';

const ListHeader: FC = () => (
  <StyledListHeaderWrapper>
    <StyledNameWrapper>
      <Headers type="h3">name</Headers>
    </StyledNameWrapper>
    <Headers type="h3">status</Headers>
  </StyledListHeaderWrapper>
);

export default ListHeader;
