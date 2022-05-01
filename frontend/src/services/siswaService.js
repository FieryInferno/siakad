import http from '../http-common';

const getAll = () => http.get('/siswa');
const create = (data) => http.post('/siswa', data);
const dataService = {getAll, create};

export default dataService;
