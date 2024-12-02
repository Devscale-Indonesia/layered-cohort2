import { NoteRepositoryLocal } from "../infrastructure/db/noteRepo.local";
import { NoteRepositoryProd } from "../infrastructure/db/noteRepo.prod";
import { NoteServices } from "./services/noteServices";

export const noteServices = new NoteServices(new NoteRepositoryProd());
