const db = require('../models');
const Siswa = db.siswa;

exports.getAll = (req, res) => {
  Siswa.findAll({include: ['agama', 'rombel']})
      .then((siswa) => res.status(200).send(siswa))
      .catch((e) => res.status(500).send({message: e.message}));
};
