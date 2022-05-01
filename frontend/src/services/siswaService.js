import http from '../http-common';

const getAll = (data) => http.get('/siswa');
const dataService = {getAll};

export default dataService;
