import { date, z } from 'zod';

export type Trip = z.infer<typeof tripSchema>;

export const tripSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  dateStart: date(),
  dateEnd: date(),
  createdAt: date(),
  createdBy: z.string(),
  isActive: z.boolean(),
});
