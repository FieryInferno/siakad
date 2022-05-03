const db = require('../models');
const Sekolah = db.sekolah;
// const {validationResult} = require('express-validator');

exports.get = (req, res) => {
  Sekolah.findOne()
      .then((sekolah) => res.status(200).send(sekolah))
      .catch((e) => res.status(500).send({message: e.message}));
};

exports.update = (req, res) => {
  const id = req.params.id;

  Sekolah.update(req.body, {where: {id: id}})
      .then((data) => {
        res.send({message: 'Sekolah was updated successfully.'});
      })
      .catch((err) => {
        res.status(500).send({message: err.message || 'Some error occured'});
      });
};
