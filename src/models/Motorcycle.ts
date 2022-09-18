import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoModel from './MongoModel';

export const MotorcycleMongooseSchema = new Schema<IMotorcycle>({
  model: String,  
  color: String,  
  status: Boolean,
  year: Number,
  buyValue: Number,
  category: String,
  engineCapacity: Number,
});

class Motorcycle extends MongoModel<IMotorcycle> {
  constructor(model = mongooseCreateModel('Motorcycle', MotorcycleMongooseSchema)) {
    super(model);
  }
}

export default Motorcycle;