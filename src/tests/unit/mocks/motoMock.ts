import { IMotorcycle } from "../../../interfaces/IMotorcycle";

const motoMock:IMotorcycle = {
    model: 'Honda',
    year: 1990,
    color: "Azul Calcinha",
    buyValue: 50.000,
    category: 'Street',
    engineCapacity: 2000
}

const motoMockWithId:IMotorcycle & { _id:string } = {
    _id: '62cf1fc6498565d94eba52cd',
    model: 'Honda',
    year: 1990,
    color: "Azul Calcinha",
    buyValue: 50.000,
    category: 'Street',
    engineCapacity: 2000
  };

  const motoMockWithIdInArray:IMotorcycle[]& { _id:string }[] = [{
    _id: '62cf1fc6498565d94eba52cd',
    model: 'Honda',
    year: 1990,
    color: "Azul Calcinha",
    buyValue: 50.000,
    category: 'Street',
    engineCapacity: 2000
  }];
  
  export { motoMock, motoMockWithId, motoMockWithIdInArray }