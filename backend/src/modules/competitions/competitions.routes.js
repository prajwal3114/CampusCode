import express from 'express';
import { create,list } from './competitions.controller.js';
import { authenticateUser } from '../../middlewares/auth.middlewares.js';

const router = express.Router();

router.post('/create/:id',authenticateUser,create);
router.get('/list/:id',authenticateUser,list);

export default router;
