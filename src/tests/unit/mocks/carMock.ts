import { ICar } from "../../../interfaces/ICar";

const carMock:ICar = {
    model: 'Fusca',
    year: 1990,
    color: "Azul Calcinha",
    buyValue: 50.000,
    doorsQty: 4,
    seatsQty: 7
}

const carMockWithId:ICar & { _id:string, __v: number } = {
    _id: '62cf1fc6498565d94eba52cd',
    model: 'Fusca',
    year: 1990,
    color: "Azul Calcinha",
    buyValue: 50.000,
    doorsQty: 4,
    seatsQty: 7,
    __v: 0
  };
 
  const carMockWithIdInArray:ICar[]& { _id:string, __v: number }[] = [{
    _id: '62cf1fc6498565d94eba52cd',
    model: 'Fusca',
    year: 1990,
    color: "Azul Calcinha",
    buyValue: 50.000,
    doorsQty: 4,
    seatsQty: 7,
    __v: 0
  }];
  
  export { carMock, carMockWithId, carMockWithIdInArray }