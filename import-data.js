import dotenv from 'dotenv';
dotenv.config();

import fs from 'fs';

import mongoose from 'mongoose';
import Tour from './models/tourModel.js';
import User from './models/userModel.js';
import Review from './models/reviewModel.js';

mongoose
  .connect(process.env.MONGO_URI)
  .then((con) =>
    console.log(`Connected to the database: ${con.connection.host}`)
  )
  .catch((err) => console.log(err));

const tours = JSON.parse(
  fs.readFileSync(`./dev-data/data/tours.json`, 'utf-8')
);
const reviews = JSON.parse(
  fs.readFileSync(`./dev-data/data/reviews.json`, 'utf-8')
);
const users = JSON.parse(
  fs.readFileSync(`./dev-data/data/users.json`, 'utf-8')
);

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    await User.deleteMany();
    await Review.deleteMany();
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const importData = async () => {
  try {
    await Tour.create(tours);
    await User.create(users, { validateBeforeSave: false });
    await Review.create(reviews);
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
