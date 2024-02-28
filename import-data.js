import dotenv from 'dotenv';
dotenv.config();

import fs from 'fs';

import mongoose from 'mongoose';
import Tour from './models/tourModel.js';

mongoose
  .connect(process.env.MONGO_URI)
  .then((con) =>
    console.log(`Connected to the database: ${con.connection.host}`)
  )
  .catch((err) => console.log(err));

const tours = JSON.parse(
  fs.readFileSync(`./dev-data/data/tours-simple.json`, 'utf-8')
);

const deleteData = async () => {
  try {
    await Tour.deleteMany();
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Tours inserted successfully');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] == '--delete') {
  deleteData();
}

if (process.argv[2] == '--import') {
  importData();
}
