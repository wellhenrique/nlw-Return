import express from "express";
import nodemailer from "nodemailer";
import { prisma } from "./prisma";

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c89893cf5fe663",
    pass: "e508e2e097a731",
  },
});

app.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      screenshot,
      comment,
    },
  });

  await transport.sendMail({
    from: "Equipe Feedget <oi@feedget.com>",
    to: "Welisson Henrique <welissonh80@gmail.com>",
    subject: "Novo Feedback",
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentario: ${comment}</p>`,
      `</div>`,
    ].join("\n"),
  });

  res.status(201).json({ data: feedback });
});

app.listen(3333, () => console.log("HTTP server running!"));
