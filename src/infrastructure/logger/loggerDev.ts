// Logger Dev (Hanya melakukan console)
import { ILogger } from "../entity/interface";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class LoggerDev implements ILogger {
  info(message: string) {
    console.log(message);
  }

  warn(message: string) {
    console.warn(message);
  }

  error(message: string) {
    console.error(message);
  }
}
