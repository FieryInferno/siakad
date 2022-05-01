module.exports = (sequelize, Sequelize) => {
  const Jurusan = sequelize.define('jurusan', {
    nama: {type: Sequelize.STRING},
  });

  return Jurusan;
};
