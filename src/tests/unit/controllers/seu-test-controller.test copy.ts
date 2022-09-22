import { expect } from 'chai';
import { Request, Response } from 'express';
import Sinon, * as sinon from 'sinon';
import MotoController from '../../../controllers/MotorcycleController';
import MotoModel from '../../../models/Motorcycle';
import MotoService from '../../../services/MotorcycleService';
import { motoMock, motoMockWithId } from '../mocks/motoMock';



