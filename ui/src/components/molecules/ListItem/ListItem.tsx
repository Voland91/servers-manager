import { FC, useState } from 'react';
import { Server } from '../../organisms/ServersList/ServersList';
import Menu from '../Menu/Menu';
import Text from '../../atoms/Text/Text';
import Status from '../Status/Status';
import { StyledListItemWrapper, StyledNameWrapper } from './ListItem.styles';

interface ListItemProps {
  item: Server;
}

const ListItem: FC<ListItemProps> = ({ item }) => {
  const [server, setServer] = useState<Server>(item);

  const REFRESH_INTERVAL = 1000;
  const fetchServer = () => {
    return fetch(`http://localhost:4454/servers/${server.id}`).then((res) => {
      return res.json();
    });
  };

  const refreshServerStatus = () => {
    fetchServer().then((data: Server) => {
      if (data.status !== 'REBOOTING') {
        setServer(data);
      } else {
        const interval = setInterval(() => {
          fetchServer().then((data) => {
            if (data.status === 'ONLINE') {
              setServer(data);
              clearInterval(interval);
            }
            setServer(data);
          });
        }, REFRESH_INTERVAL);
      }
    });
  };

  return (
    <StyledListItemWrapper>
      <StyledNameWrapper>
        <Text>{server.name}</Text>
        <Status status={server.status} />
      </StyledNameWrapper>
      <Menu status={server.status} id={server.id} refreshServerStatus={refreshServerStatus} />
    </StyledListItemWrapper>
  );
};

export default ListItem;
