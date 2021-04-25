import { FC, useEffect, useState } from 'react';
import ListHeader from '../../molecules/ListHeader/ListHeader';
import ListItem from '../../molecules/ListItem/ListItem';
import Text from '../../atoms/Text/Text';
import Header from '../../molecules/Header/Header';
import { StyledNoServersMessage, StyledHeaderWrapper } from './ServersList.styles';
import SearchBar from '../../molecules/SearchBar/SearchBar';

export interface Server {
  key: number;
  id: number;
  name: string;
  status: string;
}

const ServersList: FC = () => {
  const [servers, setServers] = useState<Server[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    fetch('http://localhost:4454/servers')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setServers(data);
      });
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
  };

  const filteringServers = servers?.filter((server) => server.name.toLowerCase().indexOf(search) !== -1);

  return (
    <>
      <StyledHeaderWrapper>
        <Header length={servers?.length} />
        <SearchBar handleSearch={handleSearch} />
      </StyledHeaderWrapper>
      <ListHeader />
      {servers ? (
        filteringServers.map((server) => <ListItem item={server} key={server.id} />)
      ) : (
        <StyledNoServersMessage>
          <Text>Sorry, there is no servers to list 🙁</Text>
        </StyledNoServersMessage>
      )}
    </>
  );
};

export default ServersList;
