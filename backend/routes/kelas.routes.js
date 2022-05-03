const {authJwt} = require('../middleware');
const {verifyToken} = authJwt;
const kelas = require('../controller/kelas.controller');
const {body} = require('express-validator');

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
        'Access-Control-Allow-Headers',
        'x-access-token, Origin, Content-Type, Accept',
    );
    next();
  });

  app.get('/api/kelas', [verifyToken], kelas.getAll);
  app.post(
      '/api/kelas',
      [verifyToken],
      body('kode').notEmpty(),
      body('nama').notEmpty(),
      kelas.create,
  );
  app.put(
      '/api/kelas/:id',
      [verifyToken],
      body('kode').notEmpty(),
      body('nama').notEmpty(),
      kelas.update,
  );
  app.get('/api/kelas/:id', [verifyToken], kelas.get);
  app.delete('/api/kelas/:id', [verifyToken], kelas.delete);
};
