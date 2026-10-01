const router = require('express').Router();
const { error } = require('node:console');
const { prisma } = require('../db/database');

router.get('/', async (req, res, next) => {
  try {
    const allGreetings = await prisma.greeting.findMany();

    res.status(200).send(allGreetings);
  } catch (error) {
    next(error);
  }
});

router.get('/:greetingId', async (req, res, next) => {
  try {
    const greeting = await prisma.greeting.findUnique({
      where: {
        id: Number(req.params.greetingId),
      },
    });

    if (!greeting) {
      throw new Error('ID IS INVALID');
    }

    res.status(200).send(greeting);
  } catch (error) {
    next(error);
  }
});

router.put('/:greetingId', async (req, res, next) => {
  try {
    const updatedGreeting = await prisma.greeting.update({
      where: {
        id: Number(req.params.greetingId),
      },
      data: req.body,
    });

    res.status(200).send(updatedGreeting);
  } catch (error) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const createdGreeting = await prisma.greeting.create({
      data: req.body,
    });

    res.status(200).send(createdGreeting);
  } catch (error) {
    next(error);
  }
});

router.delete('/:greetingId', async (req, res, next) => {
  try {
    const deletedgreeting = await prisma.greeting.delete({
      where: {
        id: Number(req.params.greetingId),
      },
    });

    res.status(200).send(deletedgreeting);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
