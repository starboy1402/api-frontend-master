import express from 'express';
import habitRoutes from './routes/habitRoutes.ts';
import userRoutes from './routes/userRoutes.ts';
import authRoutes from './routes/authRoutes.ts';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan'; 


 const app = express();
 app.use(cors());
 app.use(helmet());
 app.use(morgan('dev',{skip: isTest => process.env.NODE_ENV === 'test'  }));
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));



 app.get('/health', (req, res)=> {
    res.send('Server is healthy and running');
 })


app.use('/api/auth', authRoutes);
app.use('/api/habits', habitRoutes);
app.use('/api/users', userRoutes);


 export default app;            