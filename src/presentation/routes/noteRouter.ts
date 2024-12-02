import { Elysia, t } from "elysia";
import { noteServices } from "../../applications/instances";

export const noteRouter = new Elysia()
  .get("/", async () => {
    const notes = await noteServices.getAll();
    return notes;
  })
  .get("/:id", async ({ params }) => {
    const notes = await noteServices.getOne(params.id);
    return notes;
  })
  .post(
    "/",
    async ({ body }) => {
      const note = await noteServices.create({ content: body.content });
      return note;
    },
    {
      body: t.Object({
        content: t.String(),
      }),
    }
  );
