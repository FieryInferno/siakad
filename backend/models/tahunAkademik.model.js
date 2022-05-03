module.exports = (sequelize, Sequelize) => {
  const TahunAkademik = sequelize.define('tahunAkademik', {
    tahunAkademik: {type: Sequelize.STRING},
    // eslint-disable-next-line new-cap
    isAktif: {type: Sequelize.ENUM('y', 't')},
  });

  return TahunAkademik;
};
