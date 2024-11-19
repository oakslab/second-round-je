import { NextFunction, Request, Response } from "express";
import { logger } from "../libs/logging";

export const loggingMiddleware = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    const startTime = Date.now();
    const { method, originalUrl, ip } = req;

    // Log the incoming request
    logger.info(`Incoming ${method} ${originalUrl} from ${ip}`);

    // Add response listener to log after request is completed
    res.on("finish", () => {
      const duration = Date.now() - startTime;
      const { statusCode } = res;

      logger.info(
        `Response ${method} ${originalUrl} ${statusCode} - ${duration}ms`,
        {
          method,
          url: originalUrl,
          statusCode,
          duration,
          ip,
        },
      );
    });

    next();
  };
};
