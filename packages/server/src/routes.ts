import express from "express";
import nodemailer from "nodemailer";
import { prisma } from "./prisma";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";

export const routes = express.Router();

const feedbacksRepository = new PrismaFeedbacksRepository();

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(feedbacksRepository);

  await submitFeedbackUseCase.execute({ comment, type, screenshot });

  // await transport.sendMail({
  //   from: "Equipe Feedget <oi@feedget.com>",
  //   to: "Welisson Henrique <welissonh80@gmail.com>",
  //   subject: "Novo Feedback",
  //   html: [
  //     `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
  //     `<p>Tipo do feedback: ${type}</p>`,
  //     `<p>Comentario: ${comment}</p>`,
  //     `</div>`,
  //   ].join("\n"),
  // });

  res.status(201).send();
});
