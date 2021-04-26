import { FC } from 'react';
import Headers from '../../atoms/Headers/Headers';
import { StyledListHeaderWrapper, StyledHeader } from './ListHeader.styles';

const ListHeader: FC = () => (
  <StyledListHeaderWrapper>
    <StyledHeader>
      <Headers type="h3">name</Headers>
      <Headers type="h3">status</Headers>
    </StyledHeader>
  </StyledListHeaderWrapper>
);

export default ListHeader;
