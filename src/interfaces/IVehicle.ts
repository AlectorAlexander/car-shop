import { z } from 'zod';

const Vehicle = z.object({
  model: z.string({
    required_error: 'Model is required',
    invalid_type_error: 'Model must be a string',
  }).min(3, { message: 'Model must be 3 or more characters long' }),
  year: z.number({
    required_error: 'Year is required',
    invalid_type_error: 'Year must be a number',
  }).gte(1900, { message: 'this👏is👏too👏small' })
    .lte(2022, { message: 'this👏is👏too👏bid' }).int({ message: 'You know this isnt right' }),
  color: z.string({
    required_error: 'Color is required',
    invalid_type_error: 'Color must be a string',
  }).min(3, { message: 'Color must be 3 or more characters long' }),
  status: z.optional(z.boolean()),
  buyValue: z.number({
    required_error: 'Value is required',
    invalid_type_error: 'Value must be a number',
  }).int({ message: 'You know this isnt right' }),
});
  
export type IVehicle = z.infer<typeof Vehicle>;
