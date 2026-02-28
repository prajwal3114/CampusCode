import express from 'express';
import {create,list,remove} from './resource.controller.js';
import {authenticateUser} from '../../middlewares/auth.middlewares.js';

const router=express.Router();

router.post('/create/:courseId',authenticateUser,create);
router.get('/list/:courseId',authenticateUser,list);
router.delete('/delete/:resourceId',authenticateUser,remove);

export default router;