import http from '../http-common';

const login = (data) => http.post('/auth/login', data);
const dataService = {login};

export default dataService;
