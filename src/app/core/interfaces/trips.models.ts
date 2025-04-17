import { z } from 'zod';
import { dateTime } from './zod';

export type Trip = z.infer<typeof tripSchema>;

export const tripSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  dateStart: dateTime(),
  dateEnd: dateTime(),
  createdAt: dateTime(),
  createdBy: z.string(),
  isActive: z.boolean(),
});
