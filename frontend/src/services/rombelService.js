import http from '../http-common';

const getAll = () => http.get('/rombel');
const create = (data) => http.post('/rombel', data);
const update = (data) => http.put(`/rombel/${data.id}`, data);
const deleteRombel = (id) => http.delete(`/rombel/${id}`);
const get = (id) => http.get(`/rombel/${id}`);
const dataService = {getAll, create, deleteRombel, get, update};

export default dataService;
