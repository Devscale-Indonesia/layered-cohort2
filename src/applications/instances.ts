import { NoteRepositoryProd } from "../infrastructure/db/noteRepo.prod";
import { NoteServices } from "./services/noteServices";
import { LoggerDev } from "../infrastructure/logger/loggerDev";
import { LoggerProd } from "../infrastructure/logger/loggerProd";

const logger = process.env.NODE_ENV === "production" ? new LoggerProd() : new LoggerDev();
const noteRepository = new NoteRepositoryProd(logger);
export const noteServices = new NoteServices(noteRepository);
