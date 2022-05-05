const {authJwt} = require('../middleware');
const {verifyToken} = authJwt;
const rombel = require('../controller/rombel.controller');
const {body} = require('express-validator');

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
        'Access-Control-Allow-Headers',
        'x-access-token, Origin, Content-Type, Accept',
    );
    next();
  });

  app.get('/api/rombel', [verifyToken], rombel.getAll);
  app.post(
      '/api/rombel',
      [verifyToken],
      body('kode').notEmpty(),
      body('nama').notEmpty(),
      rombel.create,
  );
  app.put(
      '/api/rombel/:id',
      [verifyToken],
      body('kode').notEmpty(),
      body('nama').notEmpty(),
      rombel.update,
  );
  app.get('/api/rombel/:id', [verifyToken], rombel.get);
  app.delete('/api/rombel/:id', [verifyToken], rombel.delete);
};
