const db = require('../models');
const Guru = db.guru;
const {validationResult} = require('express-validator');

exports.getAll = (req, res) => {
  Guru.findAll({include: ['user']})
      .then((guru) => res.status(200).send(guru))
      .catch((e) => res.status(500).send({message: e.message}));
};

exports.create = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).send({errors: errors.array()});
  }

  Guru.create(req.body)
      .then((data) => res.status(200).send(data))
      .catch((err) => {
        res.status(500).send({message: err.message || 'Some error occured'});
      });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Guru.destroy({where: {id: id}})
      .then(() => res.send({message: 'Guru berhasi dihapus'}))
      .catch((e) => {
        res.status(500).send({message: e.message || 'Some error occured'});
      });
};

exports.get = (req, res) => {
  const id = req.params.id;

  Guru.findOne({
    where: {id: id},
    include: ['agama', 'rombel'],
  })
      .then((data) => res.status(200).send(data))
      .catch((e) => {
        res.status(500).send({message: e.message || 'Some error occured'});
      });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Guru.update(req.body, {where: {id: id}})
      .then((data) => {
        res.send({message: 'Guru was updated successfully.'});
      })
      .catch((err) => {
        res.status(500).send({message: err.message || 'Some error occured'});
      });
};
