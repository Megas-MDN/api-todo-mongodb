import { Router } from 'express';
import { updateTasks } from '../controllers/updateTasksController.js';
import { validToken } from '../middlewares/authMiddle.js';

export const route = Router();

route.patch('/', validToken, updateTasks);
