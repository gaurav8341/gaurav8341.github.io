import axios from 'axios';

export const fetchUrls = async () => {
  const response = await axios.get('/url.json');
  return response.data;
};