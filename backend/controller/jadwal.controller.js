const db = require('../models');
const Jadwal = db.jadwal;
// const {validationResult} = require('express-validator');

exports.getAll = (req, res) => {
  Jadwal.findAll()
      .then((jadwal) => res.status(200).send(jadwal))
      .catch((e) => res.status(500).send({message: e.message}));
};
