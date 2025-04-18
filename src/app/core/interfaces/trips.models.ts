import { z } from 'zod';

export type Trip = z.infer<typeof tripSchema>;
// Transformation de la date reçue du back en string en format date pour validation Zod
const date = () => z.coerce.date();

export const userSchema = z.object({
  id: z.number(),
  lastName: z.string(),
  firstName: z.string(),
  mail: z.string(),
});

export const tripSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  dateStart: date(),
  dateEnd: date(),
  createdAt: date(),
  createdBy: userSchema,
  isActive: z.boolean(),
});
