import express from "express";
import cors from "cors";
import postRoutes from "./domains/posts/post.routes";
import { logger } from "./libs/logging";
import { loggingMiddleware } from "./middlewares/logging";

const app = express();

app.use(express.json());
app.use(cors());
app.use(loggingMiddleware());

// Routes
app.use("/api/posts", postRoutes);

// Global error handler
app.use((err: Error, _: express.Request, res: express.Response) => {
  const statusCode = 500;
  const message = "Internal Server Error";

  logger.error(message, err);

  res.status(statusCode).json({
    success: false,
    error: message,
  });
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
