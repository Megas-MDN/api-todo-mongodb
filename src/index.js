import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
config();

const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true,
  })
);

app.listen(port, () => console.log('Server ON :: ', port));
