const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {origin: 'http://localhost:3000'};
const bodyParser = require('body-parser');

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./routes/auth.routes')(app);
require('./routes/siswa.routes')(app);
require('./routes/agama.routes')(app);
require('./routes/rombel.routes')(app);
require('./routes/guru.routes')(app);
require('./routes/sekolah.routes')(app);
require('./routes/mataPelajaran.routes')(app);
require('./routes/kelas.routes')(app);
require('./routes/jurusan.routes')(app);

// const db = require('./models');
// const User = db.user;
// const Jurusan = db.jurusan;
// const Rombel = db.rombel;
// const Agama = db.agama;
// const Siswa = db.siswa;
// const Sekolah = db.sekolah;
// const bcrypt = require('bcryptjs');

// const initialDatabase = () => {
//   User.create({
//     username: 'admin',
//     password: bcrypt.hashSync('admin', 8),
//     name: 'admin',
//     role: 'admin',
//   });

//   Jurusan.create({
//     kode: 'RPL',
//     nama: 'REKAYASA PERANGKAT LUNAK',
//   });
//   Agama.create({nama: 'ISLAM'});

//   Rombel.create({
//     nama: 'RPL1A',
//     kelas: '1',
//     jurusanId: 1,
//   });

//   Siswa.create({
//     nim: '10104019',
//     nama: 'Devi Ratna Daniati',
//     gender: 'P',
//     tanggal_lahir: '2000-11-26',
//     tempat_lahir: 'Rangkas',
//     foto: '',
//     agamaId: 1,
//     rombelId: 1,
//   });

//   Sekolah.create({
//     nama: 'SMAN 1 JALANCAGAK',
//     alamat: 'Jalancagak',
//     email: 'smajalancagak@gmail.com',
//     telepon: '085723853284',
//     jenjang: 'sma',
//   });
// };

// db.sequelize.sync({force: true})
//     .then(() => {
//       console.log('Drop and resync DB');
//       initialDatabase();
//     });

app.listen(5000, () => console.log('Server is running on port 5000'));
