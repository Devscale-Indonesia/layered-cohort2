// Logger Prod (Writing to file)
import { ILogger } from "../entity/interface";
import { logger } from "../utils/winston";
import "reflect-metadata";
import { injectable } from "inversify";

@injectable()
export class LoggerProd implements ILogger {
  info(message: string) {
    logger.info(message);
  }

  warn(message: string) {
    logger.warn(message);
  }

  error(message: string) {
    logger.error(message);
  }
}
