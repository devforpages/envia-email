import { Request, Response } from 'express';
import { sendEmail } from '../config/email';
import { ModelEmail } from '../model/model-email';

class EmailController {
  async sendEmail(req: Request<{}, {}, ModelEmail>, res: Response) {
    try {
      const { subject, text, replyTo } = req.body;

      if (!replyTo || !subject || !text ) {
        return res.status(400).json({ error: 'Assunto e texto são obrigatórios' });
      }

      await sendEmail({ replyTo, subject, text });

      res.status(200).json({ message: 'E-mail enviado com sucesso!' });

    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        res.status(500).json({ error: 'Falha ao enviar e-mail' });
    }
  }
}

export default new EmailController();