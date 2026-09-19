import express from "express";
import cors from "cors";
import { config } from "./config";
import { healthRouter } from "./routes/health";
import { contactRouter } from "./routes/contact";
import { examplesRouter } from "./routes/examples";

export function createApp() {
  const app = express();

  app.use(
    cors({
      origin: config.corsOrigins,
      methods: ["GET", "POST", "OPTIONS"],
      allowedHeaders: ["Content-Type"],
    }),
  );
  app.use(express.json({ limit: "32kb" }));

  app.use(healthRouter);
  app.use("/api", contactRouter);
  app.use("/api", examplesRouter);

  app.use(
    (
      _err: unknown,
      _req: express.Request,
      res: express.Response,
      _next: express.NextFunction,
    ) => {
      res.status(500).json({ error: "Internal server error" });
    },
  );

  return app;
}
