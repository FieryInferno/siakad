module.exports = (sequelize, Sequelize) => {
  const Siswa = sequelize.define('siswa', {
    nim: {type: Sequelize.STRING},
    nama: {type: Sequelize.STRING},
    gender: {type: Sequelize.STRING},
    tanggal_lahir: {type: Sequelize.DATEONLY},
    tempat_lahir: {type: Sequelize.STRING},
    foto: {type: Sequelize.STRING},
  });

  return Siswa;
};
