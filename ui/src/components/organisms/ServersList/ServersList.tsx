import { FC, useEffect, useState } from 'react';
import ListHeader from '../../molecules/ListHeader/ListHeader';
import ListItem from '../../molecules/ListItem/ListItem';
import Text from '../../atoms/Text/Text';
import Header from '../../molecules/Header/Header';
import { StyledNoServersMessage, StyledHeaderWrapper } from './ServersList.styles';
import SearchBar from '../../molecules/SearchBar/SearchBar';

interface Server {
  key: number;
  id: number;
  name: string;
  status: string;
}

const ServersList: FC = () => {
  const [servers, setServers] = useState<Server[] | null>(null);
  const [search, setSearch] = useState<Server[] | undefined | null>(null);

  useEffect(() => {
    fetch('http://localhost:4454/servers')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setServers(data);
        setSearch(data);
      });
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredServers = servers?.filter(
      (server) => server.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1,
    );
    setSearch(filteredServers);
  };

  return (
    <>
      <StyledHeaderWrapper>
        <Header length={search?.length} />
        <SearchBar handleSearch={handleSearch} />
      </StyledHeaderWrapper>
      <ListHeader />
      {search ? (
        search.map((server) => <ListItem status={server.status} name={server.name} id={server.id} key={server.id} />)
      ) : (
        <StyledNoServersMessage>
          <Text>Sorry, there is no servers to list 🙁</Text>
        </StyledNoServersMessage>
      )}
    </>
  );
};

export default ServersList;
