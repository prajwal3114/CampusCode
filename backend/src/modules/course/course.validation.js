import { z } from 'zod';

export const createCourseSchema = z.object({
    name: z.string().trim().min(3).max(100),
    description: z.string().trim().min(10).max(500).optional(),
});

export const orgParamSchema = z.object({
    id: z.string().uuid({ version: "v4" }),
});

