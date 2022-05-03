import http from '../http-common';

const getAll = () => http.get('/rombel');
const dataService = {getAll};

export default dataService;
