import http from '../http-common';

const getAll = (data) => http.get('/agama');
const dataService = {getAll};

export default dataService;
