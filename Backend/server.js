import dotenv from 'dotenv';
import express from 'express';
import connectDB from './DB/db.js';
import userRoutes from './routes/userRoutes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cookieParser());
app.use(express.json()); 


app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true
}));

app.use("/api/auth/user", userRoutes);

app.listen(5000, () => {
    console.log(`Server is running at - http://localhost:5000`);
    connectDB();
});
