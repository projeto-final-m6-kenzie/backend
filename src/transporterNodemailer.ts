import nodemailer from 'nodemailer'

class Transporter {
    static testAccount: nodemailer.TestAccount | null = null;

    private static async createAccount(): Promise<nodemailer.TestAccount> {
      if (!this.testAccount) {
        this.testAccount = await nodemailer.createTestAccount();
      }
      return this.testAccount;
    }
  
    public static transporter = nodemailer.createTransport({
      host: "smtp.outlook.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  
    public static async initTransporter(): Promise<void> {
      const testAccount = await this.createAccount();
      this.transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    }
    
} 

export default Transporter