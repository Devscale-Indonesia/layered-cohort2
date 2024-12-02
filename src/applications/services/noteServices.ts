// Business Logic Layer - Services

import { NoteRepositoryLocal } from "../../infrastructure/db/noteRepo.local";
import { ILogger } from "../../infrastructure/entity/interface";

export class NoteServices {
  private noteRepo: NoteRepositoryLocal;
  private logger: ILogger;

  constructor(noteRepo: NoteRepositoryLocal, logger: ILogger) {
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
