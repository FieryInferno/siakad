module.exports = (sequelize, Sequelize) => {
  const Jadwal = sequelize.define('jadwal', {
    jam: {type: Sequelize.STRING},
    semester: {type: Sequelize.STRING},
    // eslint-disable-next-line new-cap
    hari: {type: Sequelize.ENUM('1', '2')},
  });

  return Jadwal;
};
