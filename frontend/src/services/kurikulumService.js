import http from '../http-common';

const getAll = () => http.get('/kurikulum');
const create = (data) => http.post('/kurikulum', data);
const update = (data) => http.put(`/kurikulum/${data.id}`, data);
const deleteKurikulum = (id) => http.delete(`/kurikulum/${id}`);
const get = (id) => http.get(`/kurikulum/${id}`);

const getAllDetailKurikulum = () => http.get('/kurikulum/detail');
const createDetailKurikulum = (data) => http.post('/kurikulum/detail', data);
const deleteDetailKurikulum = (id) => http.delete(`/kurikulum/detail${id}`);
const dataService = {
  getAll, create, deleteKurikulum, get, update, getAllDetailKurikulum,
  createDetailKurikulum, deleteDetailKurikulum,
};

export default dataService;
