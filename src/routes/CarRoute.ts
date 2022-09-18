import { Router } from 'express';
import CarController from '../controllers/CarController';
import CarModel from '../models/Car';
import CarService from '../services/CarService';

const route = Router();

const Car = new CarModel();
const carService = new CarService(Car);
const carController = new CarController(carService);

route.post('/cars', (req, res) => carController.create(req, res));
route.get('/cars', (req, res) => carController.read(req, res));
route.get('/cars/:id', (req, res) => carController.readOne(req, res));
route.put('/cars/:id', (req, res) => carController.update(req, res));
route.delete('/cars/:id', (req, res) => carController.delete(req, res));

export default route;