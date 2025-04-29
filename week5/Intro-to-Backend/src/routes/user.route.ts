import { Hono } from "hono";
import * as userController from "../controllers/user.controller.ts";

const userRouter = new Hono();

userRouter.post("/", userController.createUser);
userRouter.get("/", userController.allUsers);
userRouter.get("/:id", userController.getTodoFromUser);
userRouter.patch("/", userController.updateFirstAndLast);
export { userRouter };