// Data Access Layer

import { INote } from "../entity/interface";

const noteTable: any[] = [
  { id: "1", content: "Content A" },
  { id: "2", content: "Content B" },
];

export class NoteRepositoryLocal implements INote {
  async getAll() {
    return noteTable;
  }

  async getOne(id: string) {
    const note = noteTable.filter((n) => n.id === id);
    return note[0];
  }

  async create(data: any) {
    noteTable.push(data);
    return data;
  }

  async update(id: string, data: any) {
    // logic
    return {};
  }

  async delete(id: string) {
    // logic
    return "";
  }
}
