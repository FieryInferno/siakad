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

exports.delete = (req, res) => {
  const id = req.params.id;

  Siswa.destroy({where: {id: id}})
      .then(() => res.send({message: 'Siswa berhasi dihapus'}))
      .catch((e) => {
        res.status(500).send({message: e.message || 'Some error occured'});
      });
};

exports.get = (req, res) => {
  const id = req.params.id;

  Siswa.findOne({
    where: {id: id},
    include: ['agama', 'rombel'],
  })
      .then((data) => res.status(200).send(data))
      .catch((e) => {
        res.status(500).send({message: e.message || 'Some error occured'});
      });
};

exports.update = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).send({errors: errors.array()});
  }

  const id = req.params.id;

  Siswa.update(req.body, {where: {id: id}})
      .then((data) => {
        res.send({message: 'Siswa was updated successfully.'});
      })
      .catch((err) => {
        res.status(500).send({message: err.message || 'Some error occured'});
      });
};
