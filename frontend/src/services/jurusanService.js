import http from '../http-common';

const getAll = () => http.get('/jurusan');
const create = (data) => http.post('/jurusan', data);
const update = (data) => http.put(`/jurusan/${data.id}`, data);
const deleteJurusan = (id) => http.delete(`/jurusan/${id}`);
const get = (id) => http.get(`/jurusan/${id}`);
const dataService = {getAll, create, deleteJurusan, get, update};

export default dataService;
