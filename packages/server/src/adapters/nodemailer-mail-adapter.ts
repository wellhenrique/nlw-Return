import { MailAdapter, SendMailData } from "./mail-adapter";
import nodemailer from "nodemailer";

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c09acc761cab80",
    pass: "f8a9e4bb713c62",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ body, subject }: SendMailData): Promise<void> {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Welisson Henrique <welissonh80@gmail.>",
      subject,
      html: body,
    });
  }
}
