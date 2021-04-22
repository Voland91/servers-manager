import { FC } from 'react';
import Select from '../../atoms/Select/Select';
import Text from '../../atoms/Text/Text';
import Status from '../../molecules/Status/Status';
import { StyledListItemWrapper, StyledNameWrapper } from './ListItem.styles';

const ListItem: FC = () => (
  <StyledListItemWrapper>
    <StyledNameWrapper>
      <Text>US East (Virginia)</Text>
      <Status type="online" />
    </StyledNameWrapper>
    <Select />
  </StyledListItemWrapper>
);

export default ListItem;
