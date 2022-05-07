module.exports = (sequelize, Sequelize) => {
  const Kurikulum = sequelize.define('kurikulum', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    nama: {type: Sequelize.STRING},
    // eslint-disable-next-line new-cap
    isAktif: {type: Sequelize.ENUM('y', 't')},
  });

  return Kurikulum;
};
