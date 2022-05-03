import http from '../http-common';

const getAll = () => http.get('/agama');
const dataService = {getAll};

export default dataService;
