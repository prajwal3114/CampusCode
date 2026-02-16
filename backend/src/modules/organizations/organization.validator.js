import { z } from 'zod';

export const createOrganizationSchema = z.object({
    name: z.string().trim().min(3).max(50),
    description: z.string().trim().max(255).optional()
});

export const assignOrganizerSchema = z.object({
    userId: z.string().uuid()
});
