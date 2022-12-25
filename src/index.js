import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { connectDB } from './database/dbConnect.js';
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

app.listen(port, () => console.log('Server ON :: ', port));
