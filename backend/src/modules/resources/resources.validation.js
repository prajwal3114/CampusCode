import {z} from 'zod';

export const createResourceSchema=z.object({
    title:z.string().min(3,'Title is required'),
    description:z.string().optional(),
    type:z.enum(['PDF','VIDEO','LINK','ARTICLE']),
    url:z.string().url('Invalid URL')
});