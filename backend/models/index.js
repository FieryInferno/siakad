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
db.guru = require('../models/guru.model.js')(sequelize, Sequelize);
db.sekolah = require('../models/sekolah.model.js')(sequelize, Sequelize);
db.mataPelajaran =
require('../models/mataPelajaran.model.js')(sequelize, Sequelize);
db.kelas = require('../models/kelas.model.js')(sequelize, Sequelize);
db.tahunAkademik =
  require('../models/tahunAkademik.model.js')(sequelize, Sequelize);
db.kurikulum = require('../models/kurikulum.model.js')(sequelize, Sequelize);
db.jadwal = require('../models/jadwal.model.js')(sequelize, Sequelize);
db.kurikulumDetail =
  require('../models/kurikulumDetail.model.js')(sequelize, Sequelize);

db.siswa.belongsTo(db.agama);
db.agama.hasOne(db.siswa);

db.siswa.belongsTo(db.rombel);
db.rombel.hasOne(db.siswa);

db.rombel.belongsTo(db.jurusan);
db.jurusan.hasOne(db.rombel);

db.user.hasOne(db.guru, {onDelete: 'CASCADE'});
db.guru.belongsTo(db.user);
db.guru.user = db.guru.belongsTo(db.user);

db.rombel.belongsTo(db.jurusan);
db.jurusan.hasOne(db.rombel);

db.jadwal.belongsTo(db.tahunAkademik);
db.tahunAkademik.hasOne(db.jadwal);
db.jadwal.belongsTo(db.jurusan);
db.jurusan.hasOne(db.jadwal);
db.jadwal.belongsTo(db.kelas);
db.kelas.hasOne(db.jadwal);
db.jadwal.belongsTo(db.mataPelajaran);
db.mataPelajaran.hasOne(db.jadwal);
db.jadwal.belongsTo(db.guru);
db.guru.hasOne(db.jadwal);
db.jadwal.belongsTo(db.rombel);
db.rombel.hasOne(db.jadwal);

db.kurikulumDetail.belongsTo(db.kurikulum);
db.kurikulum.hasOne(db.kurikulumDetail);
db.kurikulumDetail.belongsTo(db.mataPelajaran);
db.mataPelajaran.hasOne(db.kurikulumDetail);
db.kurikulumDetail.belongsTo(db.jurusan);
db.jurusan.hasOne(db.kurikulumDetail);

module.exports = db;
