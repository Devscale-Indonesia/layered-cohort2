import { Elysia } from "elysia";
import { noteServices } from "../../applications/instances";

export const noteRouter = new Elysia()
  // routes
  .get("/", async () => {
    const notes = await noteServices.getAll();
    return notes;
  });
