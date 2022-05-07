module.exports = (sequelize, Sequelize) => {
  const KurikulumDetail = sequelize.define('kurikulumDetail', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    kelas: {type: Sequelize.STRING},
  });

  return KurikulumDetail;
};
