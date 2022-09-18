import 'express-async-errors';
import express from 'express';
import carRoute from './routes/CarRoute';
import motoRoute from './routes/MotorcycleRoutes';
import errorHandler from './errors/error';

const app = express();
app.use(express.json());
app.use(carRoute);
app.use(motoRoute);
app.use(errorHandler);

export default app;
