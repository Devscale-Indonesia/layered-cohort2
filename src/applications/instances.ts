// Services Locator

import { Container } from "inversify";
import { ILogger, INote } from "../infrastructure/entity/interface";
import { TYPES } from "../infrastructure/entity/types";
import { LoggerProd } from "../infrastructure/logger/loggerProd";
import { NoteRepositoryProd } from "../infrastructure/db/noteRepo.prod";
import { NoteServices } from "./services/noteServices";
import { LoggerDev } from "../infrastructure/logger/loggerDev";

export const container = new Container();

// injector
// conditional
if (process.env.NODE_ENV === "production") {
  container.bind<ILogger>(TYPES.logger).to(LoggerProd);
} else {
  container.bind<ILogger>(TYPES.logger).to(LoggerDev);
}

container.bind<INote>(TYPES.noteRepo).to(NoteRepositoryProd);

// services
container.bind<NoteServices>(NoteServices).toSelf();

// instances
export const noteServices = container.get<NoteServices>(NoteServices);
