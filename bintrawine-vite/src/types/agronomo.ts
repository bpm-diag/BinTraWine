import * as z from 'zod';

export const agronomoSchema = z.object({
    token: z.string(),
});

export type Agronomo = z.infer<typeof agronomoSchema>;