const db = require('../models');
const Rombel = db.rombel;

exports.getAll = (req, res) => {
  Rombel.findAll()
      .then((rombel) => res.status(200).send(rombel))
      .catch((e) => res.status(500).send({message: e.message}));
};
