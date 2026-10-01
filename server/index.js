const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// body parsing middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', require('./api'));

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Express backend!' });
});

app.get('/*splat', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
}); // Send index.html for any other requests

// error handling middleware
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== 'test') console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
module.exports = app;

// const volleyball = require('volleyball')

// // logging middleware
// // Only use logging middleware when not running tests
// const debug = process.env.NODE_ENV === 'test'
// app.use(volleyball.custom({ debug }))

// // static middleware

// app.use('/api', require('./api')) // include our routes!