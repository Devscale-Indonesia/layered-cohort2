// Data Access Layer
import type { ILogger, INote } from "../entity/interface";
import { prisma } from "../utils/prisma";
import { Note } from "@prisma/client";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { TYPES } from "../entity/types";

@injectable()
export class NoteRepositoryProd implements INote {
  private logger: ILogger;

  constructor(@inject(TYPES.logger) logger: ILogger) {
    this.logger = logger;
  }

  async getAll() {
    try {
      const notes = await prisma.note.findMany();
      return notes;
    } catch (error) {
      if (error instanceof Error) {
        this.logger.error(error.message);
      } else {
        this.logger.error("Error on getAll NoteRepositoryProd");
      }

      return [];
    }
  }

  async getOne(id: string) {
    const note = await prisma.note.findUnique({
      where: {
        id,
      },
    });

    return note;
  }

  async create(data: Omit<Note, "id">) {
    const newNote = await prisma.note.create({
      data: {
        content: data.content,
      },
    });

    return newNote;
  }

  async update(id: string, data: any) {
    return {};
  }

  async delete(id: string) {
    return "";
  }
}
