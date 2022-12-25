import { Route } from 'express';
import { goLogin } from '../controllers/goLoginController';

export const route = Route();

route.post('/login', goLogin);
