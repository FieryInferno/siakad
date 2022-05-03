const {authJwt} = require('../middleware');
const {verifyToken} = authJwt;
const jurusan = require('../controller/jurusan.controller');
const {body} = require('express-validator');

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
        'Access-Control-Allow-Headers',
        'x-access-token, Origin, Content-Type, Accept',
    );
    next();
  });

  app.get('/api/jurusan', [verifyToken], jurusan.getAll);
  app.post(
      '/api/jurusan',
      [verifyToken],
      body('kode').notEmpty(),
      body('nama').notEmpty(),
      jurusan.create,
  );
  app.put(
      '/api/jurusan/:id',
      [verifyToken],
      body('kode').notEmpty(),
      body('nama').notEmpty(),
      jurusan.update,
  );
  app.get('/api/jurusan/:id', [verifyToken], jurusan.get);
  app.delete('/api/jurusan/:id', [verifyToken], jurusan.delete);
};
