const {authJwt} = require('../middleware');
const {verifyToken} = authJwt;
const guru = require('../controller/guru.controller');
const {body} = require('express-validator');

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
        'Access-Control-Allow-Headers',
        'x-access-token, Origin, Content-Type, Accept',
    );
    next();
  });

  app.get('/api/guru', [verifyToken], guru.getAll);
  app.post(
      '/api/guru',
      [verifyToken],
      body('nuptk').notEmpty(),
      body('user.name').notEmpty(),
      body('gender').notEmpty(),
      body('user.username').notEmpty(),
      body('user.password').notEmpty(),
      guru.create,
  );
  app.delete('/api/guru/:id', [verifyToken], guru.delete);
  app.get('/api/guru/:id', [verifyToken], guru.get);
  app.put(
      '/api/guru/:id',
      [verifyToken],
      body('nim').notEmpty(),
      body('nama').notEmpty(),
      body('tempat_lahir').notEmpty(),
      body('tanggal_lahir').notEmpty(),
      body('agamaId').notEmpty(),
      body('rombelId').notEmpty(),
      guru.update,
  );
};
