module.exports = (sequelize, Sequelize) => {
  const MataPelajaran = sequelize.define('mataPelajaran', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    kode: {type: Sequelize.STRING},
    nama: {type: Sequelize.STRING},
  });

  return MataPelajaran;
};
