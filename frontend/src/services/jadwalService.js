import http from '../http-common';

const getAll = () => http.get('/jadwal');
const dataService = {getAll};

export default dataService;
