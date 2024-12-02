import { Elysia } from "elysia";
import { noteRouter } from "./presentation/routes/noteRouter";

const app = new Elysia().use(noteRouter).listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
