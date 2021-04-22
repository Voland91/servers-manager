import { FC } from 'react';
import Text from '../../atoms/Text/Text';
import { StyledListItemWrapper, StyledNameWrapper } from './ListItem.styles';

const ListItem: FC = () => (
  <StyledListItemWrapper>
    <StyledNameWrapper>
      <Text>US East (Virginia)</Text>
    </StyledNameWrapper>
    <Text>ONLINE</Text>
  </StyledListItemWrapper>
);

export default ListItem;
