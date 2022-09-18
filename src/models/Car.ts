import { model as mongooseCreateModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './MongoModel';

export const CarMongooseSchema = new Schema<ICar>({
  model: String,  
  color: String,  
  status: Boolean,
  year: Number,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
});

class Car extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel('Car', CarMongooseSchema)) {
    super(model);
  }
}

export default Car;