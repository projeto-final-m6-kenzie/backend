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
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: "",
        pass: "",
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