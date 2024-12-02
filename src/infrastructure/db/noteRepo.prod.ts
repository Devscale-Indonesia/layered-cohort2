// Data Access Layer
import { prisma } from "../utils/prisma";
import { Note } from "@prisma/client";

export class NoteRepositoryProd implements INote {
  async getAll() {
    const notes = await prisma.note.findMany();
    return notes;
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
