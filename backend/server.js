const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {origin: 'http://localhost:3000'};
const bodyParser = require('body-parser');

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./routes/auth.routes')(app);

// const db = require('./models');
// const User = db.user;
// const bcrypt = require('bcryptjs');

// const initialUser = () => {
//   User.create({
//     username: 'admin',
//     password: bcrypt.hashSync('admin', 8),
//     name: 'admin',
//   });
// };

// db.sequelize.sync({force: true})
//     .then(() => {
//       console.log('Drop and resync DB');
//       initialUser();
//     });

app.listen(5000, () => console.log('Server is running on port 5000'));
