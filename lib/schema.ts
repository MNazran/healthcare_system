import { z } from 'zod';

export const PatientFormSchema = z.object({
  first_name: z
    .string()
    .trim()
    .min(2, 'First name must be at least 2 characters')
    .max(30, "First name can't be more than 30 characters"),
  last_name: z
    .string()
    .trim()
    .min(2, 'Last name must be at least 2 characters')
    .max(30, "Last name can't be more than 30 characters"),
});
