// Business Logic Layer - Services

import { NoteRepositoryLocal } from "../../infrastructure/db/noteRepo.local";

export class NoteServices {
  private noteRepo: NoteRepositoryLocal;

  constructor(noteRepo: NoteRepositoryLocal) {
    this.noteRepo = noteRepo;
  }

  async getAll() {
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
