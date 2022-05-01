module.exports = (sequelize, Sequelize) => {
  const Rombel = sequelize.define('rombel', {
    nama: {type: Sequelize.STRING},
    kelas: {type: Sequelize.STRING},
  });

  return Rombel;
};
