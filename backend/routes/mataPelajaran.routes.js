const {authJwt} = require('../middleware');
const {verifyToken} = authJwt;
const mataPelajaran = require('../controller/mataPelajaran.controller');
const {body} = require('express-validator');

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
        'Access-Control-Allow-Headers',
        'x-access-token, Origin, Content-Type, Accept',
    );
    next();
  });

  app.get('/api/mata_pelajaran', [verifyToken], mataPelajaran.getAll);
  app.post(
      '/api/mata_pelajaran',
      [verifyToken],
      body('kode').notEmpty(),
      body('nama').notEmpty(),
      mataPelajaran.create,
  );
  app.put(
      '/api/mata_pelajaran/:id',
      [verifyToken],
      body('kode').notEmpty(),
      body('nama').notEmpty(),
      mataPelajaran.update,
  );
  app.get('/api/mata_pelajaran/:id', [verifyToken], mataPelajaran.get);
  app.delete('/api/mata_pelajaran/:id', [verifyToken], mataPelajaran.delete);
};
