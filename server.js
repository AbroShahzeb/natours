import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

process.on('uncaughtException', (err) => {
  console.Console.log('UNCAUGHT EXCEPTION! Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

import app from './app.js';
const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URI)
  .then((con) => {
    console.log(`Connected to database successfully:  ${con.connection.host}`);
  })
  .catch((err) => console.log(err));

const server = app.listen(PORT, () =>
  console.log(`App is listening on port ${PORT}`)
);

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTOR! Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
