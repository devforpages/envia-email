import express from 'express';
import emailRoutes from './routes/routes.email';
import cors from 'cors';

const app = express();

//Libera requisições CORS para o Angular em localhost:4200
app.use(cors({
  origin: ['http://localhost:4200', 'https://aspira-facil.netlify.app'] // adicione mais se necessário
}));
app.use(express.json());
app.use('/', emailRoutes);

export default app;