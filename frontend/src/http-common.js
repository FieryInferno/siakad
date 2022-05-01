import axios from 'axios';

const auth = JSON.parse(localStorage.getItem('login'));

export default axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'content-type': 'application/json',
    'x-access-token': auth.accessToken,
  },
});
