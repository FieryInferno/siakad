const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {origin: 'http://localhost:3000'};
const bodyParser = require('body-parser');

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/api/auth/login', (req, res) => res.json({
  message: 'Server is running',
}));

app.listen(5000, () => console.log('Server is running on port 5000'));
