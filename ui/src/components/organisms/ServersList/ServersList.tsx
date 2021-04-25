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
  const [temporaryList, setTemporaryList] = useState<Server[]>([]);

  useEffect(() => {
    fetch('http://localhost:4454/servers')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setServers(data);
      });
  }, []);

  const REFRESH_INTERVAL = 1000;

  const refreshServerStatus = (serverId: number) => {
    servers.filter((server, i) => {
      if (server.id === serverId) {
        fetch(`http://localhost:4454/servers/${serverId}`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (data.status !== 'REBOOTING') {
              const updatedList = [...servers];
              updatedList[i] = data;
              setServers(updatedList);
            } else {
              const interval = setInterval(() => {
                fetch(`http://localhost:4454/servers/${serverId}`)
                  .then((res) => {
                    return res.json();
                  })
                  .then((data) => {
                    if (data.status === 'ONLINE') {
                      const updatedList = [...servers];
                      updatedList[i] = data;
                      setServers(updatedList);
                      clearInterval(interval);
                    }
                    const updatedList = [...servers];
                    updatedList[i] = data;
                    setServers(updatedList);
                  });
              }, REFRESH_INTERVAL);
            }
          });

        // if (server.status === 'REBOOTING') {
        //   const interval = setInterval(() => {
        //     fetch(`http://localhost:4454/servers/${serverId}`)
        //       .then((res) => {
        //         return res.json();
        //       })
        //       .then((data) => {
        //         if (data.status === 'ONLINE') {
        //           updatedList[i] = data;
        //           setServers(updatedList);
        //           clearInterval(interval);
        //         }
        //         updatedList[i] = data;
        //         setServers(updatedList);
        //       });
        //   }, REFRESH_INTERVAL);
        // } else {
        //   console.log(server.status);
        //   fetch(`http://localhost:4454/servers/${serverId}`)
        //     .then((res) => {
        //       return res.json();
        //     })
        //     .then((data) => {
        //       updatedList[i] = data;
        //       setServers(updatedList);
        //     });
        // }
      }
    });
  };

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
        filteringServers.map((server) => (
          <ListItem
            status={server.status}
            name={server.name}
            id={server.id}
            key={server.id}
            refreshServerStatus={refreshServerStatus}
          />
        ))
      ) : (
        <StyledNoServersMessage>
          <Text>Sorry, there is no servers to list 🙁</Text>
        </StyledNoServersMessage>
      )}
    </>
  );
};

export default ServersList;
