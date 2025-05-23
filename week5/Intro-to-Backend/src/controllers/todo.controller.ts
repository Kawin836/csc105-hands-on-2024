import type { Context } from "hono";
import * as todoModel from "../models/todo.model.ts";

type createTodoBody = {
    title: string;
    userId: number;
};

const createTodo = async (c: Context) => {
    try {
        const body = await c.req.json<createTodoBody>();
        if (!body.title || !body.userId)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        const newTodo = await todoModel.createTodo(body.title, body.userId);
        return c.json({
            success: true,
            data: newTodo,
            msg: "Created new Todo!",
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

const getTodo = async (c: Context) => {
    try {
        // const param = c.req.query("id");
        // if (param !== undefined && param !== null) {
        //     const data = await todoModel.getTodo(parseInt(param));
        //     return c.json(data, 200);
        // }
        // return c.json(
        //     {
        //         success: false,
        //         data: null,
        //         msg: "Missing required fields",
        //     },
        //     400
        // );
        const id = Number(c.req.param("id"));
        const todo = await todoModel.getTodo(id);
        return c.json(todo);
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

const deleteTodo = async (c: Context) => {
    try {
        // const query = c.req.query("id");
        // if (query !== undefined && query !== null) {
        //     const data = await todoModel.deleteTodo(parseInt(query));
        //     return c.json(data, 200);
        // }
        // return c.json(
        //     {
        //         success: false,
        //         data: null,
        //         msg: "Missing required fields",
        //     },
        //     400
        // );
        const id = Number(c.req.param("id"));
        const todo = await todoModel.deleteTodo(id);
        return c.json(todo);
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

// 2) Create API to update the complete in todo model to true using http patch method.
const updateComplete = async (c: Context) => {
    try {
        const id = Number(c.req.param("id"));
        const todo = await todoModel.updateComplete(id);
        return c.json(todo);
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}
// 3) Create API to update title of todo model to something else using patch method.
const updateTitle = async (c: Context) => {
    try {
        const {id, title } = await c.req.json();
        const todo = await todoModel.updateTitle(id, title);
        return c.json(todo);
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

export { createTodo , getTodo, deleteTodo, updateComplete, updateTitle };