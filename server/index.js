'use strict';

const { prisma } = require('./db/database.js');
const app = require('./main');
const PORT = process.env.PORT || 5000;

const shutdown = async() => {
  console.log('Shutting down server...');

  await prisma.$disconnect()
    .then(() => {
      console.log('Database connection closed.');
      process.exit(0);
    })
    .catch((err) => {
      console.error('Error closing database connection:', err);
      process.exit(1);
    });

  app.close(() => {
    console.log('Server closed.');
  });
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
process.once('SIGUSR2', async () => {
  await shutdown();
});

app.listen(PORT, () =>
    console.log(`studiously serving silly sounds on port http://localhost:${PORT}`)
);
