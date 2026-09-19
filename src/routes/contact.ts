import { Router } from "express";
import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";
import { z } from "zod";
import { config } from "../config";

export const contactRouter = Router();

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Valid email is required").max(254),
  message: z.string().trim().min(1, "Message is required").max(5000),
  company: z.string().trim().max(200).optional(),
});

contactRouter.post("/contact", async (req, res) => {
  const parsed = contactSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({
      error: "Validation failed",
      details: parsed.error.flatten().fieldErrors,
    });
    return;
  }

  const submission = {
    ...parsed.data,
    receivedAt: new Date().toISOString(),
  };

  console.log("[contact]", JSON.stringify(submission));

  try {
    const dir = path.resolve(config.contactDataDir);
    await mkdir(dir, { recursive: true });
    const filePath = path.join(dir, "contacts.json");
    await appendFile(filePath, `${JSON.stringify(submission)}\n`, "utf8");
  } catch (err) {
    console.error("[contact] failed to persist submission", err);
    res.status(500).json({ error: "Could not store contact submission" });
    return;
  }

  res.status(201).json({ ok: true });
});
