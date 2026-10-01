const { error } = require('node:console');
const { prisma } = require('./database');

const Greetings = [
  {
    message: 'Hello World!!!',
  },
  {
    message: 'Hola Mundo!!!',
  },
  {
    message: 'Hello From The Backend!!!',
  },
  {
    message: 'Welcome To The NERP Stack!!!',
  },
  {
    message: 'Hello From The Moon!!!',
  },
  {
    message: 'Yah like jazz?',
  },
];

const seed = async () => {
  try {
    await prisma.greeting.deleteMany();
    await prisma.$executeRawUnsafe(
      `ALTER SEQUENCE "Greeting_id_seq" RESTART WITH 1;`,
    );

    const greetings = await prisma.greeting.createManyAndReturn({
      data: Greetings,
    });

    console.log(`Seeded ${greetings.length} greetings`);
    console.log(greetings);
  } catch (error) {
    throw error;
  }
};

module.exports = seed;

if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!');
    })
    .catch((error) => {
      console.error('Oh No! Something went wrong!');
      console.error(error);
    });
}
