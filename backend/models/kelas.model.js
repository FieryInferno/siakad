module.exports = (sequelize, Sequelize) => {
  const Kelas = sequelize.define('kelas', {
    kode: {type: Sequelize.STRING},
    nama: {type: Sequelize.STRING},
  });

  return Kelas;
};
