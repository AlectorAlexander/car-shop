 import * as sinon from 'sinon';
 import chai from 'chai';
 const { expect } = chai;
 import MotoModel from '../../../models/Motorcycle'
 import CarModel from '../../../models/Car'
 import { Model } from 'mongoose'
 import { motoMock, motoMockWithId, motoMockWithIdInArray } from '../mocks/motoMock'
 import { carMock, carMockWithId, carMockWithIdInArray } from '../mocks/carMock'

 describe('Teste com carros', () => {
     const carModel = new CarModel();

   before(async () => {

     sinon.stub(Model, 'create').resolves(carMockWithId);
     sinon.stub(Model, 'find').resolves(carMockWithIdInArray);
     sinon.stub(Model, 'findOne').resolves(carMockWithId);
     sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockWithIdInArray[0]);
     sinon.stub(Model, 'findByIdAndDelete').resolves({});
   });

   after(()=>{
     sinon.restore();
   })

   describe('Criando um carro', () => {
    it('Criado com sucesso!!', async () => {
        const newcar = await carModel.create(carMock);
        expect(newcar).to.be.deep.equal(carMockWithId);
    });
});

describe('Procurando a lista de carros', () => {
    it('Encontrado com sucesso!', async () => {
        const carsFound = await carModel.read();
        expect(carsFound).to.be.deep.equal(carMockWithIdInArray);
    });
    it('Encontrado um carro', async () => {
        const carsFound = await carModel.readOne('62cf1fc6498565d94eba52cd');
        console.log(carsFound);
        
        expect(carsFound).to.be.deep.equal(carMockWithId);
    });
});
describe('Atualizando um carro', () => {
    it('Encontrado com sucesso!', async () => {
        const carsFound = await carModel.update('62cf1fc6498565d94eba52cd', carMock);
        expect(carsFound).to.be.deep.equal(carMockWithId);
    });

    it('Id com menos 24 caracters', async () => {
        try {
            await carModel.update('123ERRADO', carMock);
        } catch (error: any) {
            expect(error.message).to.be.eq('InvalidMongoId');
        }
    });
    it('Id com 24 caracters, mas inválido', async () => {
        try {
            await carModel.update('62cf1fc6498565d94eba52c2', carMock);
        } catch (error: any) {
            expect(error.status).to.be.eq(404);
        }
    });
    it('É disparado o erro 400 caso o body esteja vazio', async () => {
        try {
            await carModel.update('62cf1fc6498565d94eba52c2', {});
        } catch (error: any) {
            expect(error.status).to.be.eq(400);
        }
    });
});
describe('Deletando um carro', () => {
    it('Id com menos 24 caracters', async () => {
        try {
            await carModel.delete('123ERRADO');
        } catch (error: any) {
            expect(error.message).to.be.eq('InvalidMongoId');
        }
    });
    it('Id com 24 caracters, mas inválido', async () => {
        try {
            await carModel.delete('62cf1fc6498565d94eba52c2');
        } catch (error: any) {
            expect(error.status).to.be.eq(404);
        }
    });
});

 });

 describe('Teste com motos', () => {
    const motoModel = new MotoModel();

  before(async () => {

    sinon.stub(Model, 'create').resolves(motoMockWithId);
    sinon.stub(Model, 'find').resolves(motoMockWithIdInArray);
    sinon.stub(Model, 'findOne').resolves(motoMockWithId);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(motoMockWithIdInArray[0]);
    sinon.stub(Model, 'findByIdAndDelete').resolves({});
  });

  after(()=>{
    sinon.restore();
  })

  describe('Criando um moto', () => {
   it('Criado com sucesso!!', async () => {
       const newmoto = await motoModel.create(motoMock);
       expect(newmoto).to.be.deep.equal(motoMockWithId);
   });
});

describe('Procurando a lista de motos', () => {
   it('Encontrado com sucesso!', async () => {
       const motosFound = await motoModel.read();
       expect(motosFound).to.be.deep.equal(motoMockWithIdInArray);
   });
});
describe('Atualizando um moto', () => {
   it('Encontrado com sucesso!', async () => {
       const motosFound = await motoModel.update('62cf1fc6498565d94eba52cd', motoMock);
       expect(motosFound).to.be.deep.equal(motoMockWithId);
   });

   it('Id com menos 24 caracters', async () => {
       try {
           await motoModel.update('123ERRADO', motoMock);
       } catch (error: any) {
            expect(error.message).to.be.eq('InvalidMongoId');
       }
   });
   it('Id com 24 caracters, mas inválido', async () => {
       try {
           await motoModel.update('62cf1fc6498565d94eba52c2', motoMock);
       } catch (error: any) {
           expect(error.status).to.be.eq(404);
       }
   });
   it('É disparado o erro 400 caso o body esteja vazio', async () => {
       try {
           await motoModel.update('62cf1fc6498565d94eba52c2', motoMock);
       } catch (error: any) {
           expect(error.status).to.be.eq(400);
       }
   });
});
describe('Deletando um moto', () => {
   it('Id com menos 24 caracters', async () => {
       try {
           await motoModel.delete('123ERRADO');
       } catch (error: any) {
            expect(error.message).to.be.eq('InvalidMongoId');
       }
   });
   it('Id com 24 caracters, mas inválido', async () => {
       try {
           await motoModel.delete('62cf1fc6498565d94eba52c2');
       } catch (error: any) {
           expect(error.status).to.be.eq(404);
       }
   });
});

});