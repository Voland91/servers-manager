import { FC, useEffect, useState } from 'react';
import ListHeader from '../../molecules/ListHeader/ListHeader';
import ListItem from '../../molecules/ListItem/ListItem';
import Text from '../../atoms/Text/Text';
import Header from '../../molecules/Header/Header';
import StyledNoServersMessage from './ServersList.styles';

interface Server {
  key: number;
  id: number;
  name: string;
  status: string;
}

const ServersList: FC = () => {
  const [servers, setServers] = useState<Server[] | null>(null);

  useEffect(() => {
    fetch('http://localhost:4454/servers')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setServers(data);
      });
  }, []);

  return (
    <>
      <Header length={servers?.length} />
      <ListHeader />
      {servers ? (
        servers.map((server) => <ListItem status={server.status} name={server.name} id={server.id} key={server.id} />)
      ) : (
        <StyledNoServersMessage>
          <Text>Sorry, there is no servers to list 🙁</Text>
        </StyledNoServersMessage>
      )}
    </>
  );
};

export default ServersList;
