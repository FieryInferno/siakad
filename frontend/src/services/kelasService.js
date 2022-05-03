import http from '../http-common';

const getAll = () => http.get('/kelas');
const create = (data) => http.post('/kelas', data);
const update = (data) => http.put(`/kelas/${data.id}`, data);
const deleteKelas = (id) => http.delete(`/kelas/${id}`);
const get = (id) => http.get(`/kelas/${id}`);
const dataService = {getAll, create, deleteKelas, get, update};

export default dataService;
