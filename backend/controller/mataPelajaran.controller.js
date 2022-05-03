const db = require('../models');
const MataPelajaran = db.mataPelajaran;
const {validationResult} = require('express-validator');

exports.getAll = (req, res) => {
  MataPelajaran.findAll()
      .then((mataPelajaran) => res.status(200).send(mataPelajaran))
      .catch((e) => res.status(500).send({message: e.message}));
};

exports.create = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).send({errors: errors.array()});
  }

  MataPelajaran.create(req.body)
      .then((data) => res.status(200).send(data))
      .catch((err) => {
        res.status(500).send({message: err.message || 'Some error occured'});
      });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  MataPelajaran.destroy({where: {id: id}})
      .then(() => res.send({message: 'MataPelajaran berhasi dihapus'}))
      .catch((e) => {
        res.status(500).send({message: e.message || 'Some error occured'});
      });
};

exports.get = (req, res) => {
  const id = req.params.id;

  MataPelajaran.findOne({where: {id: id}})
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

  MataPelajaran.update(req.body, {where: {id: id}})
      .then((data) => {
        res.send({message: 'MataPelajaran was updated successfully.'});
      })
      .catch((err) => {
        res.status(500).send({message: err.message || 'Some error occured'});
      });
};
