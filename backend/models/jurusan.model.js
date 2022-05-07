module.exports = (sequelize, Sequelize) => {
  const Jurusan = sequelize.define('jurusan', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    kode: {type: Sequelize.STRING},
    nama: {type: Sequelize.STRING},
  });

  return Jurusan;
};
