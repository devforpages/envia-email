// Tipagem para as opções de e-mail
export interface ModelEmail {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html?: string;
}
