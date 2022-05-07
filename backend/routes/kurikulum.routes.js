const {authJwt} = require('../middleware');
const {verifyToken} = authJwt;
const kurikulum = require('../controller/kurikulum.controller');
const {body} = require('express-validator');

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
        'Access-Control-Allow-Headers',
        'x-access-token, Origin, Content-Type, Accept',
    );
    next();
  });

  app.get('/api/kurikulum', [verifyToken], kurikulum.getAll);
  app.post(
      '/api/kurikulum',
      [verifyToken],
      body('isAktif').notEmpty(),
      body('nama').notEmpty(),
      kurikulum.create,
  );
  app.put(
      '/api/kurikulum/:id',
      [verifyToken],
      body('isAktif').notEmpty(),
      body('nama').notEmpty(),
      kurikulum.update,
  );
  app.get('/api/kurikulum/:id', [verifyToken], kurikulum.get);
  app.delete('/api/kurikulum/:id', [verifyToken], kurikulum.delete);

  app.get('/api/kurikulumDetail', [verifyToken], kurikulum.getAllDetail);
  app.post(
      '/api/kurikulumDetail',
      [verifyToken],
      body('isAktif').notEmpty(),
      body('nama').notEmpty(),
      kurikulum.createDetail,
  );
  app.delete(
      '/api/kurikulumDetail/:id', [verifyToken], kurikulum.deleteDetail,
  );
};
