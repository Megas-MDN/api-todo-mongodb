import mongoose from 'mongoose';
import { config } from 'dotenv';
config();

export const connectDB = () => {
  mongoose.set('strictQuery', true);
  mongoose
    .connect(process.env.CONNECT_DB)
    .then(() => console.log('Connected DB'))
    .catch((err) => console.log('Error to connect database', err));
};
