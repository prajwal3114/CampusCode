import express from 'express';
import { submit, mySubmissions } from './submission.controller.js';
import { authenticateUser } from '../../middlewares/auth.middlewares.js';

const router = express.Router();

router.post('/submit/:id', authenticateUser, submit);
router.get('/my-submissions/:id', authenticateUser, mySubmissions);

export default router;