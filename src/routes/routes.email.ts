import { Router } from 'express';
import EmailController from '../controllers/controllers-email';

const router = Router();

router.get('/', (req, res) => {
  console.log('API servidor de email iniciado com sucesso, use /send-email via POST para enviar requisicão!!!');
  res.json({ message: 'API servidor de email iniciado com sucesso, use /send-email via POST para enviar requisicão!!!' });
});

router.get('/send-email', (req, res) => {
    console.log('Favor usar requisição POST para enviar e-mail');
    res.json({
        Explicação:'Para enviar um e-mail, faça uma requisição POST para /send-email com o corpo da requisição contendo os campos "subject","text ou html se quiser".',
        subject: "assunto do e-mail",
        text: "Corpo do e-mail em texto",
        html: "<h1>Olá seu nome!</h1><p>Este é um e-mail de teste enviado através da sua API Node.js com Nodemailer!</p>"
    })
});

router.post('/send-email', EmailController.sendEmail);

export default router;