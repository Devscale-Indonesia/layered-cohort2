// Business Logic Layer - Services

import { ILogger, INote } from "../../infrastructure/entity/interface";
import { injectable, inject } from "inversify";
import { TYPES } from "../../infrastructure/entity/types";
import "reflect-metadata";

@injectable()
export class NoteServices {
  private noteRepo: INote;
  private logger: ILogger;

  constructor(@inject(TYPES.noteRepo) noteRepo: INote, @inject(TYPES.logger) logger: ILogger) {
    this.noteRepo = noteRepo;
    this.logger = logger;
  }

  async getAll() {
    this.logger.info("Get all from noteServices");
    // redis => memory cache
    return [];
  }

  async getOne(id: string) {
    return {};
  }

  async create(data: any) {
    // ...
    return {};
  }

  async update(id: string, data: any) {
    return {};
  }

  async delete(id: string) {
    return "";
  }
}
