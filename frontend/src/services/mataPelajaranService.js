import http from '../http-common';

const getAll = () => http.get('/mata_pelajaran');
const create = (data) => http.post('/mata_pelajaran', data);
const update = (data) => http.put(`/mata_pelajaran/${data.id}`, data);
const deleteMataPelajaran = (id) => http.delete(`/mata_pelajaran/${id}`);
const get = (id) => http.get(`/mata_pelajaran/${id}`);
const dataService = {getAll, create, deleteMataPelajaran, get, update};

export default dataService;
