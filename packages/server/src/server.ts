import express from "express";

const app = express();

app.post("/feedback", (req, res) => {
  const { comment, image } = req.body;
});

app.listen(3333, () => console.log("HTTP server running!"));
