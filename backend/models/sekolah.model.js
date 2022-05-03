module.exports = (sequelize, Sequelize) => {
  const Sekolah = sequelize.define('sekolah', {
    nama: {type: Sequelize.STRING},
    alamat: {type: Sequelize.STRING},
    email: {type: Sequelize.STRING},
    telepon: {type: Sequelize.STRING},
    // eslint-disable-next-line new-cap
    jenjang: {type: Sequelize.ENUM('sd', 'smp', 'sma')},
  });

  return Sekolah;
};
