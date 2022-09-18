import { z } from 'zod';
import { Vehicle } from './IVehicle';

export const MotorcycleZodSchema = Vehicle.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number({
    required_error: 'Seats is required',
    invalid_type_error: 'Seats must be a number',
  }).gt(0, { message: 'u can do better than that' })
    .lte(2500, { message: 'this is too big' }).int({ message: 'You know this isnt right' }),
});

export type IMotorcycle = z.infer<typeof MotorcycleZodSchema>;
