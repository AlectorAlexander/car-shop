import { expect } from 'chai';
import { Request, Response } from 'express';
import Sinon, * as sinon from 'sinon';
import CarModel from '../../../models/Car';
import CarController from '../../../controllers/CarController';
import MotoController from '../../../controllers/MotorcycleController';
import MotoModel from '../../../models/Motorcycle';
import CarService from '../../../services/CarService';
import MotoService from '../../../services/MotorcycleService';
import { carMock, carMockWithId } from '../mocks/carMock';
import { motoMock, motoMockWithId } from '../mocks/motoMock';



describe('Car Controller', () => {
  const carModel = new CarModel()
  const carService = new CarService(carModel);
  const carController = new CarController(carService);
  const req = {} as Request; 
  const res = {} as Response;

  before(() => {
    sinon.stub(carService, 'create').resolves(carMockWithId);
    sinon.stub(carService, 'readOne').resolves(carMock);
    sinon.stub(carService, 'update').resolves(carMockWithId);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore()
  })

  describe('Create Car', () => {
    it('Success', async () => {
      req.body = carMock;
      await carController.create(req, res);

      const statusStub = res.status as sinon.SinonStub
      const jsonStub = res.json as sinon.SinonStub

      expect(statusStub.calledWith(201)).to.be.true;
      expect(jsonStub.calledWith(carMockWithId)).to.be.true;
    });
  });

  describe('ReadOne Car', () => {
    it('Success', async () => {
      req.params = { id: carMockWithId._id };
      await carController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    });
  });


  describe('Update Car', () => {
    it('Success', async () => {
      req.params = { id: carMockWithId._id };
      req.body = carMock;

      await carController.update(req, res);

      const statusStub = res.status as Sinon.SinonStub;
      const jsonStub = res.json as Sinon.SinonStub;

      expect(statusStub.calledWith(200)).to.be.true;
      expect(jsonStub.calledWith(carMockWithId)).to.be.true;
    })
  })
});

describe('Moto Controller', () => {
    const motoModel = new MotoModel()
    const motoService = new MotoService(motoModel);
    const motoController = new MotoController(motoService);
    const req = {} as Request; 
    const res = {} as Response;
  
    before(() => {
      sinon.stub(motoService, 'create').resolves(motoMockWithId);
      sinon.stub(motoService, 'readOne').resolves(motoMock);
      sinon.stub(motoService, 'update').resolves(motoMockWithId);
  
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });
  
    after(() => {
      sinon.restore()
    })
  
    describe('Create Moto', () => {
      it('Success', async () => {
        req.body = motoMock;
        await motoController.create(req, res);
  
        const statusStub = res.status as sinon.SinonStub
        const jsonStub = res.json as sinon.SinonStub
  
        expect(statusStub.calledWith(201)).to.be.true;
        expect(jsonStub.calledWith(motoMockWithId)).to.be.true;
      });
    });
  
    describe('ReadOne Moto', () => {
      it('Success', async () => {
        req.params = { id: motoMockWithId._id };
        await motoController.readOne(req, res);
  
        expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
        expect((res.json as sinon.SinonStub).calledWith(motoMock)).to.be.true;
      });
    });
  
  
    describe('Update Moto', () => {
      it('Success', async () => {
        req.params = { id: motoMockWithId._id };
        req.body = motoMock;
  
        await motoController.update(req, res);
  
        const statusStub = res.status as Sinon.SinonStub;
        const jsonStub = res.json as Sinon.SinonStub;
  
        expect(statusStub.calledWith(200)).to.be.true;
        expect(jsonStub.calledWith(motoMockWithId)).to.be.true;
      })
    })
  });