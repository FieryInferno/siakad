module.exports = (sequelize, Sequelize) => {
  const Guru = sequelize.define('guru', {
    nuptk: {type: Sequelize.STRING},
    // eslint-disable-next-line new-cap
    gender: {type: Sequelize.ENUM('l', 'p')},
  });

  return Guru;
};
