import { Router } from 'express';
import CarController from '../controllers/CarController';
import CarModel from '../models/Car';
import CarService from '../services/CarService';

const carRoute = Router();

const Car = new CarModel();
const carService = new CarService(Car);
const carController = new CarController(carService);

carRoute.post('/cars', (req, res) => carController.create(req, res));
carRoute.get('/cars', (req, res) => carController.read(req, res));
carRoute.get('/cars/:id', (req, res) => carController.readOne(req, res));
carRoute.put('/cars/:id', (req, res) => carController.update(req, res));
carRoute.delete('/cars/:id', (req, res) => carController.delete(req, res));

export default carRoute;