import { z } from 'zod';
import { Vehicle } from './IVehicle';

export const CarZodSchema = Vehicle.extend({
  doorsQty: z.number({
    required_error: 'Doors is required',
    invalid_type_error: 'Doors must be a number',
  }).gte(2, { message: 'this is too small' })
    .lte(4, { message: 'this is too bid' }).int({ message: 'You know this isnt right' }),
  seatsQty: z.number({
    required_error: 'Seats is required',
    invalid_type_error: 'Seats must be a number',
  }).gte(2, { message: 'this is too small' })
    .lte(7, { message: 'this is too bid' }).int({ message: 'You know this isnt right' }),
});

export type ICar = z.infer<typeof CarZodSchema>;
