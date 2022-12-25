import { Router } from 'express';
import { goLogin } from '../controllers/goLoginController.js';

export const route = Router();

route.post('/login', goLogin);
