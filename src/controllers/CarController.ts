import { /* NextFunction, */ Request, Response } from 'express';
import { IService } from '../interfaces/IServices';
import { ICar } from '../interfaces/ICar';

export default class CarController {
  constructor(private _service: IService<ICar>) { }

  public async create(
    req: Request, 
    res: Response<ICar>,
    /* next: NextFunction */
  ) {
    const { model, year, color, status, buyValue, doorsQty, seatsQty } = req.body;
    const car = { model, year, color, status, buyValue, doorsQty, seatsQty };
    const results = await this._service.create(car);
    return res.status(201).json(results);
  }

  public async read(
    req: Request,
    res: Response<ICar[]>,
  ) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }

  public async readOne(
    req: Request,
    res: Response<ICar>,
  ) {
    const result = await this._service.readOne(req.params.id);
    return res.status(200).json(result);
  }

  public async update(
    req: Request,
    res: Response<ICar>,
  ) {
    const { model, year, color, status, buyValue, doorsQty, seatsQty } = req.body;
    const { id } = req.params;
    const car = { model, year, color, status, buyValue, doorsQty, seatsQty };

    const result = await this._service.update(id, car);
    return res.status(200).json(result);
  }

  public async delete(
    req: Request,
    res: Response<ICar>,
  ) {
    const result = await this._service.delete(req.params.id);
    return res.status(204).json(result);
  }
}