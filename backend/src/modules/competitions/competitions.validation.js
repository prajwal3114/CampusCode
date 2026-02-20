import {z} from 'zod';

export const createCompetitionSchema = z.object({
    title: z.string().min(3,'Title is required'),
    description: z.string().optional(),
    startDate: z.string().datetime(),
    endDate: z.string().datetime()
});

export const updateStatusSchema = z.object({
    status: z.enum(['UPCOMING','LIVE','ENDED'])
});