import http from '../http-common';

const getAll = (data) => http.get('/rombel');
const dataService = {getAll};

export default dataService;
