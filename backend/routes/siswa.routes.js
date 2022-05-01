const {authJwt} = require('../middleware');
const {verifyToken} = authJwt;
const siswa = require('../controller/siswa.controller');

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
        'Access-Control-Allow-Headers',
        'x-access-token, Origin, Content-Type, Accept',
    );
    next();
  });

  app.get('/api/siswa', [verifyToken], siswa.getAll);
  app.post('/api/siswa', [verifyToken], siswa.create);
};
