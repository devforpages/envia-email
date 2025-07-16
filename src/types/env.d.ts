declare namespace NodeJS {
  interface ProcessEnv {
    // SMTP
    SMTP_HOST: string;
    SMTP_PORT: string;
    SMTP_SECURE: string;
    SMTP_USER: string;
    SMTP_PASS: string;
    
    // Email
    TO_EMAIL: string;
    
    // Server
    PORT: string;
    NODE_ENV: 'development' | 'production' | 'test';
  }
}