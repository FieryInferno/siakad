module.exports = (sequelize, Sequelize) => {
  const Kurikulum = sequelize.define('kurikulum', {
    nama: {type: Sequelize.STRING},
    // eslint-disable-next-line new-cap
    isAktif: {type: Sequelize.ENUM('y', 't')},
  });

  return Kurikulum;
};
