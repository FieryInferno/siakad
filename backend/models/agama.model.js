module.exports = (sequelize, Sequelize) => {
  const Agama = sequelize.define('agama', {
    nama: {type: Sequelize.STRING},
  });

  return Agama;
};
