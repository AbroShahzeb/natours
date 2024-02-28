import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

import app from './app.js';
const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URI)
  .then((con) => {
    console.log(`Connected to database successfully:  ${con.connection.host}`);
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
