import { Router } from 'express';
import MotorcycleController from '../controllers/MotorcycleController';
import MotorcycleModel from '../models/Motorcycle';
import MotorcycleService from '../services/MotorcycleService';

const motoRoute = Router();

const Motorcycle = new MotorcycleModel();
const motorcycleService = new MotorcycleService(Motorcycle);
const motorcycleController = new MotorcycleController(motorcycleService);

const MtId = '/motorcycles/:id';

motoRoute.post('/motorcycles', (req, res) => motorcycleController.create(req, res));
motoRoute.get('/motorcycles', (req, res) => motorcycleController.read(req, res));
motoRoute.get(MtId, (req, res) => motorcycleController.readOne(req, res));
motoRoute.put(MtId, (req, res) => motorcycleController.update(req, res));
motoRoute.delete(MtId, (req, res) => motorcycleController.delete(req, res));

export default motoRoute;