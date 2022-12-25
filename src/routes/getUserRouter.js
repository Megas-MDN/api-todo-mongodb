import { Router } from 'express';
import { getUser } from '../controllers/getUsersController.js';
import { validToken } from '../middlewares/authMiddle.js';

export const route = Router();

route.get('/', validToken, getUser);
