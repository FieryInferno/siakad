const db = require('../models');
const User = db.user;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/auth.config');

exports.login = (req, res) => {
  const {username, password} = req.body;

  User.findOne({where: {username: username}})
      .then((user) => {
        if (!user) {
          res.status(404).send({message: 'User not found'});
        } else {
          const {
            id, username: usernameUser, password: passwordUser, name,
          } = user;

          if (!bcrypt.compareSync(password, passwordUser)) {
            res.status(401).send({message: 'Invalid Password'});
          }

          const token = jwt.sign({id: id}, config.secret, {expiresIn: 86400});

          res.status(200).send({
            usename: usernameUser,
            name: name,
            accessToken: token,
          });
        }
      })
      .catch((e) => res.status(500).send({message: e.message}));
};
