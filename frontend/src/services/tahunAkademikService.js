import http from '../http-common';

const getAll = () => http.get('/tahun_akademik');
const create = (data) => http.post('/tahun_akademik', data);
const update = (data) => http.put(`/tahun_akademik/${data.id}`, data);
const deleteTahunAkademik = (id) => http.delete(`/tahun_akademik/${id}`);
const get = (id) => http.get(`/tahun_akademik/${id}`);
const dataService = {getAll, create, deleteTahunAkademik, get, update};

export default dataService;
