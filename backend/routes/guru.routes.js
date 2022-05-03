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
      body('nama').notEmpty(),
      body('gender').notEmpty(),
      body('username').notEmpty(),
      body('password').notEmpty(),
      guru.create,
  );
  app.delete('/api/guru/:id', [verifyToken], guru.delete);
  app.get('/api/guru/:id', [verifyToken], guru.get);
  app.put('/api/guru/:id', [verifyToken], guru.update);
};
