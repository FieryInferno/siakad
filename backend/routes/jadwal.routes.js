const {authJwt} = require('../middleware');
const {verifyToken} = authJwt;
const jadwal = require('../controller/jadwal.controller');
// const {body} = require('express-validator');

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
        'Access-Control-Allow-Headers',
        'x-access-token, Origin, Content-Type, Accept',
    );
    next();
  });

  app.get('/api/jadwal', [verifyToken], jadwal.getAll);
  // app.post(
  //     '/api/jadwal',
  //     [verifyToken],
  //     body('kode').notEmpty(),
  //     body('nama').notEmpty(),
  //     jadwal.create,
  // );
  // app.put(
  //     '/api/jadwal/:id',
  //     [verifyToken],
  //     body('kode').notEmpty(),
  //     body('nama').notEmpty(),
  //     jadwal.update,
  // );
  // app.get('/api/jadwal/:id', [verifyToken], jadwal.get);
  // app.delete('/api/jadwal/:id', [verifyToken], jadwal.delete);
};
