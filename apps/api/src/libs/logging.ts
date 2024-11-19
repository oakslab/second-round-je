import winston, { Logger, createLogger, format } from "winston";

const { combine, timestamp, printf, colorize } = format;

interface LoggerService {
  info(message: string, meta?: Record<string, unknown>): void;
  error(message: string, error?: Error | Record<string, unknown>): void;
  warn(message: string, meta?: Record<string, unknown>): void;
  debug(message: string, meta?: Record<string, unknown>): void;
}

// Custom log format
const logFormat = printf(({ level, message, timestamp, ...meta }) => {
  const metaString = Object.keys(meta).length ? JSON.stringify(meta) : "";
  return `${timestamp} [${level}]: ${message} ${metaString}`;
});

const winstonLogger: Logger = createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: combine(timestamp(), logFormat),
  transports: [
    new winston.transports.Console({
      format: combine(colorize(), timestamp(), logFormat),
    }),
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "logs/combined.log",
    }),
  ],
});

export const logger: LoggerService = {
  info: (message: string, meta?: Record<string, unknown>): void => {
    winstonLogger.info(message, meta);
  },

  error: (message: string, error?: Error | Record<string, unknown>): void => {
    if (error instanceof Error) {
      winstonLogger.error(message, {
        error: {
          message: error.message,
          stack: error.stack,
        },
      });
    } else {
      winstonLogger.error(message, error);
    }
  },

  warn: (message: string, meta?: Record<string, unknown>): void => {
    winstonLogger.warn(message, meta);
  },

  debug: (message: string, meta?: Record<string, unknown>): void => {
    winstonLogger.debug(message, meta);
  },
};
