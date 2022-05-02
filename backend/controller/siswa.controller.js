const db = require('../models');
const Siswa = db.siswa;
const {validationResult} = require('express-validator');

exports.getAll = (req, res) => {
  Siswa.findAll({include: ['agama', 'rombel']})
      .then((siswa) => res.status(200).send(siswa))
      .catch((e) => res.status(500).send({message: e.message}));
};

exports.create = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).send({errors: errors.array()});
  }

  Siswa.create(req.body)
      .then((data) => res.status(200).send(data))
      .catch((err) => {
        res.status(500).send({message: err.message || 'Some error occured'});
      });
};
