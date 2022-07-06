import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

describe("Submit feedback", () => {
  const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
  );

  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "fake_bug",
        comment: "fake_comment",
        screenshot: "data:image/png;base64:fake_screenshot",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should not be able to submit feedback  without type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "fake_comment",
        screenshot: "data:image/png;base64:fake_screenshot",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit feedback  without comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "fake_type",
        comment: "",
        screenshot: "data:image/png;base64:fake_screenshot",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit feedback with an invalid screenshot", async () => {
    await expect(
      submitFeedback.execute({
        type: "fake_type",
        comment: "fake_comment",
        screenshot: "fake.jpg",
      })
    ).rejects.toThrow();
  });
});
