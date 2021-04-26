import { API_URL as url, Server } from '../environment/constans';

const fetchBase = (customUrl: string) => {
  return fetch(customUrl).then((res) => {
    return res.json();
  });
};

// initial Fetching - started when app starts
const initialFetching = (state: (value: React.SetStateAction<Server[]>) => void) => {
  fetchBase(url).then((data) => {
    state(data);
  });
};

// refreshing - when you change status of server it calls to API to know it;s actual state,
// if state is rebooting - call API every REFRESH_INTERVAL until it's online
const REFRESH_INTERVAL = 1000;

const refreshServerStatus = (id: number, state: React.Dispatch<React.SetStateAction<Server>>) => {
  fetchBase(`${url}/${id}`).then((data: Server) => {
    if (data.status !== 'REBOOTING') {
      state(data);
    } else {
      const interval = setInterval(() => {
        fetchBase(`${url}/${id}`).then((data) => {
          if (data.status === 'ONLINE') {
            state(data);
            clearInterval(interval);
          }
          state(data);
        });
      }, REFRESH_INTERVAL);
    }
  });
};

// changing server status
const changingStatus = (status: string, id: number | string, refresh: (serverData: number) => void) => {
  fetch(`${url}/${id}/${status}`, { method: 'put' }).then(() => {
    refresh(Number(id));
  });
};

export { initialFetching, refreshServerStatus, changingStatus };
