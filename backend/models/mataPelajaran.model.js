module.exports = (sequelize, Sequelize) => {
  const MataPelajaran = sequelize.define('mataPelajaran', {
    kode: {type: Sequelize.STRING},
    nama: {type: Sequelize.STRING},
  });

  return MataPelajaran;
};
