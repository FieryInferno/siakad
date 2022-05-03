const {authJwt} = require('../middleware');
const {verifyToken} = authJwt;
const sekolah = require('../controller/sekolah.controller');
const {body} = require('express-validator');

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
        'Access-Control-Allow-Headers',
        'x-access-token, Origin, Content-Type, Accept',
    );
    next();
  });

  app.get('/api/sekolah', [verifyToken], sekolah.get);
  app.put(
      '/api/sekolah/:id',
      [verifyToken],
      body('nama').notEmpty(),
      body('alamat').notEmpty(),
      body('email').notEmpty(),
      body('email').isEmail(),
      body('telepon').notEmpty(),
      body('jenjang').notEmpty(),
      sekolah.update,
  );
};
