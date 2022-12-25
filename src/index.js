import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { connectDB } from './database/dbConnect.js';
import { route as loginRoute } from './routes/loginRoute.js';
import { route as deleteRoute } from './routes/deleteRoute.js';
import { route as getUserRoute } from './routes/getUserRouter.js';
import { route as updateTasksRoute } from './routes/updateTasksRoute.js';
config();

const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
connectDB();

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true,
  })
);
app.use(getUserRoute);
app.use(updateTasksRoute);
app.use(deleteRoute);
app.use(loginRoute);
app.listen(port, () => console.log('Server ON :: ', port));
