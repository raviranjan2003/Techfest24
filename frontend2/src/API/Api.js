import axios from 'axios';

// export const baseUrl = 'https://www.techfestsliet.org/api';
export const baseUrl = 'http://127.0.0.1:4030';

const localUrlIns = axios.create({
  baseURL: baseUrl,
  'withCredentials':true,
  headers: {
    'Content-Type': 'multipart/form-data',
    'Accept':'application/json',
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
  },
});

export default localUrlIns;
