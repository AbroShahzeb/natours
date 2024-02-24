import express from 'express';
import morgan from 'morgan';

import userRoutes from './routes/userRoutes.js';
import tourRoutes from './routes/tourRoutes.js';
const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/tour', tourRoutes);

export default app;
