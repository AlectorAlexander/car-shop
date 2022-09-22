import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import CarModel from '../../../models/Car';
import MotoModel from '../../../models/Motorcycle';
import CarService from '../../../services/CarService';
import MotoService from '../../../services/MotorcycleService';
import { carMock, carMockWithId } from '../mocks/carMock';
import { motoMock, motoMockWithId } from '../mocks/motoMock';

describe('Car Service', () => {
	const carModel = new CarModel();
	const carService = new CarService(carModel);

	before(() => {
		sinon.stub(carModel, 'create').resolves(carMockWithId);
		sinon.stub(carModel, 'readOne')
			.onCall(0).resolves(carMockWithId)
			.onCall(1).resolves(null);
		
		sinon.stub(carModel, 'update')
			.onCall(0).resolves(carMockWithId)
			.onCall(1).resolves(null);
	});

	after(() => {
		sinon.restore()
	});
  
	describe('Create Car', () => {
		it('Success', async () => {
			const CarCreated = await carService.create(carMock);

			expect(CarCreated).to.be.deep.equal(carMockWithId);
		});

		it('Failure', async () => {
			let err: any;

			try {
				await carService.create({});
			} catch (error) {
				err = error;
			}

			expect(err).to.be.instanceOf(ZodError);
		});
	});

	describe('ReadOne Car', () => {
		it('Success', async () => {
			const CarFound = await carService.readOne(carMockWithId._id);

			expect(CarFound).to.be.deep.equal(carMockWithId);
		});

		it('Failure', async () => {
			let err: any;

			try {
        // a mesma chamada que o teste acima aqui vai gerar o erro por causa do nosso sinon.stub(...).onCall(1)
				await carService.readOne(carMockWithId._id);
			} catch (error:any) {
				err = error;
			}

			expect(err, 'error should be defined').not.to.be.undefined;
			expect(err.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
		});
	});

	describe('Update Car', () => {
		it('Success', async () => {
			const updated = await carService.update('any-id', carMock);

			expect(updated).to.be.deep.eq(carMockWithId)
		})

		it('Failure - Not Found', async () => {
			let err: any;

			try {
				await carService.update('any-id', carMock);
			} catch(error) {
				err = error;
			}

			expect(err, 'error should be defined').not.to.be.undefined;
			expect(err.message).to.be.eq(ErrorTypes.EntityNotFound);
		})

		it('Failure - Zod Fails', async () => {
			let err: any;

			try {
				await carService.update('any-id', {});
			} catch(error) {
				err = error;
			}

			expect(err, 'error should be defined').not.to.be.undefined;
			expect(err).to.be.instanceOf(ZodError);
		})
	})

});

describe('Car Service', () => {
	const carModel = new CarModel();
	const carService = new CarService(carModel);

	before(() => {
		sinon.stub(carModel, 'create').resolves(carMockWithId);
		sinon.stub(carModel, 'readOne')
			.onCall(0).resolves(carMockWithId)
			.onCall(1).resolves(null);
		
		sinon.stub(carModel, 'update')
			.onCall(0).resolves(carMockWithId)
			.onCall(1).resolves(null);
	});

	after(() => {
		sinon.restore()
	});
  
	describe('Create Car', () => {
		it('Success', async () => {
			const CarCreated = await carService.create(carMock);

			expect(CarCreated).to.be.deep.equal(carMockWithId);
		});

		it('Failure', async () => {
			let err: any;

			try {
				await carService.create({});
			} catch (error) {
				err = error;
			}

			expect(err).to.be.instanceOf(ZodError);
		});
	});

	describe('ReadOne Car', () => {
		it('Success', async () => {
			const CarFound = await carService.readOne(carMockWithId._id);

			expect(CarFound).to.be.deep.equal(carMockWithId);
		});

		it('Failure', async () => {
			let err: any;

			try {
        // a mesma chamada que o teste acima aqui vai gerar o erro por causa do nosso sinon.stub(...).onCall(1)
				await carService.readOne(carMockWithId._id);
			} catch (error:any) {
				err = error;
			}

			expect(err, 'error should be defined').not.to.be.undefined;
			expect(err.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
		});
	});

	describe('Update Car', () => {
		it('Success', async () => {
			const updated = await carService.update('any-id', carMock);

			expect(updated).to.be.deep.eq(carMockWithId)
		})

		it('Failure - Not Found', async () => {
			let err: any;

			try {
				await carService.update('any-id', carMock);
			} catch(error) {
				err = error;
			}

			expect(err, 'error should be defined').not.to.be.undefined;
			expect(err.message).to.be.eq(ErrorTypes.EntityNotFound);
		})

		it('Failure - Zod Fails', async () => {
			let err: any;

			try {
				await carService.update('any-id', {});
			} catch(error) {
				err = error;
			}

			expect(err, 'error should be defined').not.to.be.undefined;
			expect(err).to.be.instanceOf(ZodError);
		})
	})

});

describe('Moto Service', () => {
	const motoModel = new MotoModel();
	const motoService = new MotoService(motoModel);

	before(() => {
		sinon.stub(motoModel, 'create').resolves(motoMockWithId);
		sinon.stub(motoModel, 'readOne')
			.onCall(0).resolves(motoMockWithId)
			.onCall(1).resolves(null);
		
		sinon.stub(motoModel, 'update')
			.onCall(0).resolves(motoMockWithId)
			.onCall(1).resolves(null);
	});

	after(() => {
		sinon.restore()
	});
  
	describe('Create Moto', () => {
		it('Success', async () => {
			const CarCreated = await motoService.create(motoMock);

			expect(CarCreated).to.be.deep.equal(motoMockWithId);
		});

		it('Failure', async () => {
			let err: any;

			try {
				await motoService.create({});
			} catch (error) {
				err = error;
			}

			expect(err).to.be.instanceOf(ZodError);
		});
	});

	describe('ReadOne Moto', () => {
		it('Success', async () => {
			const CarFound = await motoService.readOne(motoMockWithId._id);

			expect(CarFound).to.be.deep.equal(motoMockWithId);
		});

		it('Failure', async () => {
			let err: any;

			try {
        // a mesma chamada que o teste acima aqui vai gerar o erro por causa do nosso sinon.stub(...).onCall(1)
				await motoService.readOne(motoMockWithId._id);
			} catch (error:any) {
				err = error;
			}

			expect(err, 'error should be defined').not.to.be.undefined;
			expect(err.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
		});
	});

	describe('Update Moto', () => {
		it('Success', async () => {
			const updated = await motoService.update('any-id', motoMock);

			expect(updated).to.be.deep.eq(motoMockWithId)
		})

		it('Failure - Not Found', async () => {
			let err: any;

			try {
				await motoService.update('any-id', motoMock);
			} catch(error) {
				err = error;
			}

			expect(err, 'error should be defined').not.to.be.undefined;
			expect(err.message).to.be.eq(ErrorTypes.EntityNotFound);
		})

		it('Failure - Zod Fails', async () => {
			let err: any;

			try {
				await motoService.update('any-id', {});
			} catch(error) {
				err = error;
			}

			expect(err, 'error should be defined').not.to.be.undefined;
			expect(err).to.be.instanceOf(ZodError);
		})
	})

});