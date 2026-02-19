import {list,register,submitScore} from './participation.controller.js';
import express from 'express';
import { authenticateUser } from '../../middlewares/auth.middlewares.js';

const router=express.Router();

router.post('/register/:id',authenticateUser,register);
router.patch('/score/:id',authenticateUser,submitScore);
router.get('/list/:id',authenticateUser,list);

export default router;
