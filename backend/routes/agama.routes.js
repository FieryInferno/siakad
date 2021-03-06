const {authJwt} = require('../middleware');
const {verifyToken} = authJwt;
const controller = require('../controller/agama.controller');

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
        'Access-Control-Allow-Headers',
        'x-access-token, Origin, Content-Type, Accept',
    );

    next();
  });

  app.get('/api/agama', [verifyToken], controller.getAll);
};
