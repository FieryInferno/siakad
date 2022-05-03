module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('users', {
    username: {type: Sequelize.STRING},
    password: {type: Sequelize.STRING},
    name: {type: Sequelize.STRING},
    // eslint-disable-next-line new-cap
    role: {type: Sequelize.ENUM('admin', 'guru', 'walikelas')},
  });

  return User;
};
