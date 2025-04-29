import { Hono } from "hono";
import * as todoController from "../controllers/todo.controller.ts";

const todoRouter = new Hono();
todoRouter.post("/", todoController.createTodo);
todoRouter.get("/:id", todoController.getTodo);
todoRouter.delete("/:id", todoController.deleteTodo)
todoRouter.patch("/completed/:id", todoController.updateComplete);
todoRouter.patch("/", todoController.updateTitle);

export { todoRouter };