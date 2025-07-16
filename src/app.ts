import express from 'express';
import emailRoutes from './routes/routes.email';

const app = express();

app.use(express.json());
app.use('/api', emailRoutes);

export default app;