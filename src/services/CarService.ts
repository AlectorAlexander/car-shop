import { IService } from '../interfaces/IServices';
import { ICar, CarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  InvalidMongoId = 'InvalidMongoId',
}

class CarService implements IService<ICar> {
  private _Car:IModel<ICar>;

  constructor(model:IModel<ICar>) {
    this._Car = model;
  }

  public async create(obj:unknown):Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);
    
    if (!parsed.success) {
      throw parsed.error;
    }
    const result = await this._Car.create(parsed.data);
    return result;
  }

  public async read():Promise<ICar[]> {
    const Car = await this._Car.read();
    if (!Car) throw new Error(ErrorTypes.EntityNotFound);
    return Car;
  }

  public async readOne(_id:string):Promise<ICar> {
    const Car = await this._Car.readOne(_id);
    if (!Car) throw new Error(ErrorTypes.EntityNotFound);
    return Car;
  }

  public async update(id:string, obj: ICar | object):Promise<ICar> {
    const Car = await this._Car.update(id, obj);
    const parsed = CarZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    if (!Car) throw new Error(ErrorTypes.EntityNotFound);
    return Car;
  }

  public async delete(id:string):Promise<ICar> {
    const Car = await this._Car.delete(id);
    if (!Car) throw new Error(ErrorTypes.EntityNotFound);
    return Car;
  }
}

export default CarService;