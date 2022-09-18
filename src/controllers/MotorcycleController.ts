import { /* NextFunction, */ Request, Response } from 'express';
import { IService } from '../interfaces/IServices';
import { IMotorcycle } from '../interfaces/IMotorcycle';

export default class MotorcycleController {
  constructor(private _service: IService<IMotorcycle>) { }

  public async create(
    req: Request, 
    res: Response<IMotorcycle>,
    /* next: NextFunction */
  ) {
    const { model, year, color, status, buyValue, category, engineCapacity } = req.body;
    const Motorcycle = { model, year, color, status, buyValue, category, engineCapacity };
    const results = await this._service.create(Motorcycle);
    return res.status(201).json(results);
  }

  public async read(
    req: Request,
    res: Response<IMotorcycle[]>,
  ) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }

  public async readOne(
    req: Request,
    res: Response<IMotorcycle>,
  ) {
    const result = await this._service.readOne(req.params.id);
    return res.status(200).json(result);
  }

  public async update(
    req: Request,
    res: Response<IMotorcycle>,
  ) {
    const { model, year, color, status, buyValue, category, engineCapacity } = req.body;
    const { id } = req.params;
    const Motorcycle = { model, year, color, status, buyValue, category, engineCapacity };

    const result = await this._service.update(id, Motorcycle);
    return res.status(200).json(result);
  }

  public async delete(
    req: Request,
    res: Response<IMotorcycle>,
  ) {
    const result = await this._service.delete(req.params.id);
    return res.status(204).json(result);
  }
}