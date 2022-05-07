module.exports = (sequelize, Sequelize) => {
  const KurikulumDetail = sequelize.define('kurikulumDetail', {
    kelas: {type: Sequelize.STRING},
  });

  return KurikulumDetail;
};
