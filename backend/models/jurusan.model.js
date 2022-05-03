module.exports = (sequelize, Sequelize) => {
  const Jurusan = sequelize.define('jurusan', {
    kode: {type: Sequelize.STRING},
    nama: {type: Sequelize.STRING},
  });

  return Jurusan;
};
