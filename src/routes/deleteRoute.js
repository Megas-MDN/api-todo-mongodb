import { Router } from 'express';
import { deleteUser } from '../controllers/deleteController.js';
import { validToken } from '../middlewares/authMiddle.js';

export const route = Router();

route.delete('/', validToken, deleteUser);
