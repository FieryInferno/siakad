import http from '../http-common';

const getAll = () => http.get('/guru');
const create = (data) => http.post('/guru', data);
const update = (data) => http.put(`/guru/${data.id}`, data);
const deleteGuru = (id) => http.delete(`/guru/${id}`);
const get = (id) => http.get(`/guru/${id}`);
const dataService = {getAll, create, deleteGuru, get, update};

export default dataService;
