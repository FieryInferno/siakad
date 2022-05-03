const {authJwt} = require('../middleware');
const {verifyToken} = authJwt;
const tahunAkademik = require('../controller/tahunAkademik.controller');
const {body} = require('express-validator');

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
        'Access-Control-Allow-Headers',
        'x-access-token, Origin, Content-Type, Accept',
    );
    next();
  });

  app.get('/api/tahun_akademik', [verifyToken], tahunAkademik.getAll);
  app.post(
      '/api/tahun_akademik',
      [verifyToken],
      body('kode').notEmpty(),
      body('nama').notEmpty(),
      tahunAkademik.create,
  );
  app.put(
      '/api/tahun_akademik/:id',
      [verifyToken],
      body('kode').notEmpty(),
      body('nama').notEmpty(),
      tahunAkademik.update,
  );
  app.get('/api/tahun_akademik/:id', [verifyToken], tahunAkademik.get);
  app.delete('/api/tahun_akademik/:id', [verifyToken], tahunAkademik.delete);
};
