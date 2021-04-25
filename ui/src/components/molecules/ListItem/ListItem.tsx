import { FC } from 'react';
import Menu from '../Menu/Menu';
import Text from '../../atoms/Text/Text';
import Status from '../Status/Status';
import { StyledListItemWrapper, StyledNameWrapper } from './ListItem.styles';

interface ListItemProps {
  status: string;
  id: number;
  name: string;
  refreshServerStatus: (serverId: number) => void;
}

const ListItem: FC<ListItemProps> = ({ name, status, id, refreshServerStatus }) => {
  return (
    <StyledListItemWrapper>
      <StyledNameWrapper>
        <Text>{name}</Text>
        <Status status={status} />
      </StyledNameWrapper>
      <Menu status={status} id={id} refreshServerStatus={refreshServerStatus} />
    </StyledListItemWrapper>
  );
};

export default ListItem;
