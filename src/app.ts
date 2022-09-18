import 'express-async-errors';
import express from 'express';
import route from './routes/CarRoute';
import errorHandler from './errors/error';

const app = express();
app.use(express.json());
app.use(route);
app.use(errorHandler);

export default app;
