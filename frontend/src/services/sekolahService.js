import http from '../http-common';

const get = () => http.get('/sekolah');
const update = (data) => http.put('/sekolah', data);
const dataService = {get, update};

export default dataService;
