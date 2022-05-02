import http from '../http-common';

const getAll = () => http.get('/siswa');
const create = (data) => http.post('/siswa', data);
const deleteSiswa = (id) => http.delete(`/siswa/${id}`);
const get = (id) => http.get(`/siswa/${id}`);
const dataService = {getAll, create, deleteSiswa, get};

export default dataService;
