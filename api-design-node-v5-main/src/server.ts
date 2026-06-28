import express from 'express';
import habitRoutes from './routes/habitRoutes.ts';
import userRoutes from './routes/userRoutes.ts';
import authRoutes from './routes/authRoutes.ts';


 const app = express();

 app.get('/health', (req, res)=> {
    res.send('Server is healthy and running');
 })


app.use('/api/auth', authRoutes);
app.use('/api/habits', habitRoutes);
app.use('/api/users', userRoutes);


 export default app;