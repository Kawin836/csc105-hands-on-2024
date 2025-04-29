import { db } from "../index.ts";

const createTodo = async (title: string, userId: number) => {
    const todo = await db.todo.create({
        data: {
            title: title,
            userId: userId,
        },
    });
    return todo;
}

const getTodo = async (id: number) => {
    const todo = await db.todo.findUnique({
         where: {
            id: id,
        },
        include: {
            user: true, 
        },
    });
    return todo;
}

const deleteTodo = async (id: number) => {
    const todo = await db.todo.delete({
        where: {
            id: id,
        },
    });
    return todo;
}
// 2) Create API to update the complete in todo model to true using http patch method.
const updateComplete = async (id: number) => {
    const todo = await db.todo.update({
        where: {
            id: id,
        },
        data: {
            completed: true,
        },
    });
    return todo;
}

// 3) Create API to update title of todo model to something else using patch method.
const updateTitle = async (id: number, title: string) => {
    const todo = await db.todo.update({
        where: {
            id: id,
        },
        data: {
            title: title,
        },
    });
    return todo;
}

export { createTodo , getTodo, deleteTodo, updateComplete, updateTitle};