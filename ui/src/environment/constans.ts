export const API_URL = 'http://localhost:4454/servers';

export interface Server {
  key: number;
  id: number;
  name: string;
  status: string;
}
