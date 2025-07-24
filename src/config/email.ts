import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { ModelEmail } from '../model/model-email';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});


// Função para enviar e-mail com tipagem forte
export const sendEmail = async (
  options: Omit<ModelEmail, 'from' | 'to' >
): Promise<void> => {
  const mailOptions: ModelEmail = {
    from: process.env.SMTP_USER as string,
    to: process.env.TO_EMAIL as string,
    ...options
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('E-mail enviado com sucesso');
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    throw error;
  }
};

// Verificar conexão
transporter.verify((error) => {
  if (error) {
    console.error('Erro na conexão SMTP:', error);
  } else {
    console.log('Servidor SMTP configurado com sucesso');
  }
});

export default transporter;