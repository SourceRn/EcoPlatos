require('dotenv').config();
const express = require('express');
const mongose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to the database');
}).catch((err) => {
  console.log('Error connecting to the database', err);
});

app.get('/', (req, res) => {
  res.send('Servidor Funcionando');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});