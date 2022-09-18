import { IService } from '../interfaces/IServices';
import { IMotorcycle, MotorcycleZodSchema } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';

enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  InvalidMongoId = 'InvalidMongoId',
}

class MotorcycleService implements IService<IMotorcycle> {
  private _Motorcycle:IModel<IMotorcycle>;

  constructor(model:IModel<IMotorcycle>) {
    this._Motorcycle = model;
  }

  public async create(obj:unknown):Promise<IMotorcycle> {
    const parsed = MotorcycleZodSchema.safeParse(obj);
    
    if (!parsed.success) {
      throw parsed.error;
    }
    const result = await this._Motorcycle.create(parsed.data);
    return result;
  }

  public async read():Promise<IMotorcycle[]> {
    const Motorcycle = await this._Motorcycle.read();
    if (!Motorcycle) throw new Error(ErrorTypes.EntityNotFound);
    return Motorcycle;
  }

  public async readOne(_id:string):Promise<IMotorcycle> {
    const Motorcycle = await this._Motorcycle.readOne(_id);
    if (!Motorcycle) throw new Error(ErrorTypes.EntityNotFound);
    return Motorcycle;
  }

  public async update(id:string, obj:IMotorcycle):Promise<IMotorcycle> {
    const parsed = MotorcycleZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    const Motorcycle = await this._Motorcycle.update(id, obj);
    if (!Motorcycle) throw new Error(ErrorTypes.EntityNotFound);
    return Motorcycle;
  }

  public async delete(id:string):Promise<IMotorcycle> {
    const Motorcycle = await this._Motorcycle.delete(id);
    if (!Motorcycle) throw new Error(ErrorTypes.EntityNotFound);
    return Motorcycle;
  }
}

export default MotorcycleService;