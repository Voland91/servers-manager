import { FC } from 'react';
import Select from '../../atoms/Select/Select';
import Text from '../../atoms/Text/Text';
import Status from '../Status/Status';
import { StyledListItemWrapper, StyledNameWrapper } from './ListItem.styles';

// interface StatusProps {
//   online?: boolean;
//   offline?: boolean;
//   reboot?: boolean;
// }

interface ListItemProps {
  status: string;
  id: number;
  key: number;
  name: string;
}

const ListItem: FC<ListItemProps> = ({ name, status }) => (
  <StyledListItemWrapper>
    <StyledNameWrapper>
      <Text>{name}</Text>
      <Status status={status} />
    </StyledNameWrapper>
    <Select />
  </StyledListItemWrapper>
);

export default ListItem;
