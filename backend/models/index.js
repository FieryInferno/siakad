const Sequelize = require('sequelize');
const config = require('../config/db.config.js');
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require('../models/user.model.js')(sequelize, Sequelize);
db.siswa = require('../models/siswa.model.js')(sequelize, Sequelize);
db.agama = require('../models/agama.model.js')(sequelize, Sequelize);
db.rombel = require('../models/rombel.model.js')(sequelize, Sequelize);
db.jurusan = require('../models/jurusan.model.js')(sequelize, Sequelize);
db.siswa.belongsTo(db.agama);
db.agama.hasOne(db.siswa);
db.siswa.belongsTo(db.rombel);
db.rombel.hasOne(db.siswa);
db.rombel.belongsTo(db.jurusan);
db.jurusan.hasOne(db.rombel);

module.exports = db;
