import { Router } from 'express';
import EmailController from '../controllers/controllers-email';

const router = Router();

router.post('/send-email', EmailController.sendEmail);

export default router;