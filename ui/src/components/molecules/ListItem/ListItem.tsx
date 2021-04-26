import { FC, useState, useEffect } from 'react';
import { Server } from '../../../environment/constans';
import { refreshServerStatus } from '../../../data/fetching';
import Menu from '../Menu/Menu';
import Text from '../../atoms/Text/Text';
import Status from '../Status/Status';
import { StyledListItemWrapper, StyledNameWrapper } from './ListItem.styles';

interface ListItemProps {
  item: Server;
}

const ListItem: FC<ListItemProps> = ({ item }) => {
  const [server, setServer] = useState<Server>(item);

  useEffect(() => {
    server.status === 'REBOOTING' && refreshServer();
  }, []);

  const refreshServer = () => {
    refreshServerStatus(server.id, setServer);
  };

  return (
    <StyledListItemWrapper>
      <StyledNameWrapper>
        <Text>{server.name}</Text>
        <Status status={server.status} />
      </StyledNameWrapper>
      <Menu status={server.status} id={server.id} refreshServer={refreshServer} />
    </StyledListItemWrapper>
  );
};

export default ListItem;
