import { Router } from "express";
import { siteExamples } from "../data/examples";

export const examplesRouter = Router();

examplesRouter.get("/examples", (_req, res) => {
  res.json({ examples: siteExamples });
});

examplesRouter.get("/examples/:id", (req, res) => {
  const example = siteExamples.find((item) => item.id === req.params.id);

  if (!example) {
    res.status(404).json({ error: "Example not found" });
    return;
  }

  res.json({ example });
});
