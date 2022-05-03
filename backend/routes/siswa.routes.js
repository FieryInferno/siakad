const {authJwt} = require('../middleware');
const {verifyToken} = authJwt;
const siswa = require('../controller/siswa.controller');
const {body} = require('express-validator');

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
        'Access-Control-Allow-Headers',
        'x-access-token, Origin, Content-Type, Accept',
    );
    next();
  });

  app.get('/api/siswa', [verifyToken], siswa.getAll);
  app.post(
      '/api/siswa',
      [verifyToken],
      body('nim').notEmpty(),
      body('nama').notEmpty(),
      body('tempat_lahir').notEmpty(),
      body('tanggal_lahir').notEmpty(),
      body('agamaId').notEmpty(),
      body('rombelId').notEmpty(),
      siswa.create,
  );
  app.put(
      '/api/siswa/:id',
      [verifyToken],
      body('nim').notEmpty(),
      body('nama').notEmpty(),
      body('tempat_lahir').notEmpty(),
      body('tanggal_lahir').notEmpty(),
      body('agamaId').notEmpty(),
      body('rombelId').notEmpty(),
      siswa.update,
  );
  app.get('/api/siswa/:id', [verifyToken], siswa.get);
  app.delete('/api/siswa/:id', [verifyToken], siswa.delete);
};
