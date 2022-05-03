const db = require('../models');
const Guru = db.guru;
const User = db.user;
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');

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

  req.body.user.role = 'guru';

  if (req.body.user.password) {
    req.body.user.password = bcrypt.hashSync(req.body.user.password, 8);
  }

  Guru.create(req.body, {include: [{association: Guru.user}]})
      .then((guru) => {
        res.status(200).send(guru);
      })
      .catch((err) => {
        res.status(500).send({message: err.message || 'Some error occured'});
      });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({where: {id: id}})
      .then(() => res.send({message: 'Guru berhasi dihapus'}))
      .catch((e) => {
        res.status(500).send({message: e.message || 'Some error occured'});
      });
};

exports.get = (req, res) => {
  const id = req.params.id;

  Guru.findOne({
    where: {id: id},
    include: ['user'],
  })
      .then((data) => res.status(200).send(data))
      .catch((e) => {
        res.status(500).send({message: e.message || 'Some error occured'});
      });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const {nuptk, gender, user} = req.body;

  Guru.update({
    nuptk: nuptk,
    gender: gender,
  }, {where: {id: id}})
      .catch((err) => {
        return res.status(500).send({
          message: err.message || 'Some error occured',
        });
      });

  if (user.password) {
    user.password = bcrypt.hashSync(user.password, 8);
  }

  User.update(user, {where: {id: user.id}})
      .catch((err) => {
        return res.status(500).send({
          message: err.message || 'Some error occured',
        });
      });

  return res.status(200).send({message: 'Guru was updated successfully.'});
};
