import http from '../http-common';

const getAll = () => http.get('/jadwal');
const create = (data) => http.post('/jadwal', data);
const dataService = {getAll, create};

export default dataService;
