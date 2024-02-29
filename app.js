import express from 'express';
import morgan from 'morgan';

import userRoutes from './routes/userRoutes.js';
import tourRoutes from './routes/tourRoutes.js';

import AppError from './utils/appError.js';
import GlobalErrorHandler from './controllers/errorController.js';
const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/tour', tourRoutes);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on the server!`, 404));
});

app.use(GlobalErrorHandler);

export default app;
