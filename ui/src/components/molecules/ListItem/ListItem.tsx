import { FC } from 'react';
import { Server } from '../../organisms/ServersList/ServersList';
import Menu from '../Menu/Menu';
import Text from '../../atoms/Text/Text';
import Status from '../Status/Status';
import { StyledListItemWrapper, StyledNameWrapper } from './ListItem.styles';

interface ListItemProps {
  status: string;
  id: number;
  name: string;
  rebootingServer: (server: Server) => void;
}

const ListItem: FC<ListItemProps> = ({ name, status, id, rebootingServer }) => {
  return (
    <StyledListItemWrapper>
      <StyledNameWrapper>
        <Text>{name}</Text>
        <Status status={status} />
      </StyledNameWrapper>
      <Menu status={status} id={id} rebootingServer={rebootingServer} />
    </StyledListItemWrapper>
  );
};

export default ListItem;
