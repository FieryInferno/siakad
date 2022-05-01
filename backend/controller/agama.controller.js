const db = require('../models');
const Agama = db.agama;

exports.getAll = (req, res) => {
  Agama.findAll()
      .then((agama) => res.status(200).send(agama))
      .catch((e) => res.status(500).send({message: e.message}));
};
