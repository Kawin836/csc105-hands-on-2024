import { db } from "../index.ts";

const isDuplicate = async( firstName: string, lastName: string ) => {
    const user = await db.user.findFirst({
        where: {
            firstName: firstName,
            lastName: lastName,
        },
    });
    return user;
}

const createUser = async ( firstName: string, lastName: string ) => {
    const user = await db.user.create({
        data: {
            firstName: firstName,
            lastName: lastName,
        },
    });
    return user;
}

// 1) Create API to get all users 
const allUsers = async () => {
    const user = await db.user.findMany();
    return user;
}

// 4) Create API to get all todo of one user
const getTodoFromUser = (userId: number) => {
    const todo = db.todo.findMany({
        where: {
            userId: userId
        }
    })
    return todo;
}

// 5) Create API to edit firstname and lastname of user.
const updateFirstAndLast = (id:number, firstName: string, lastName: string) => {
    const user = db.user.update({
        where: {
            id: id,
        },
        data: {
            firstName: firstName,
            lastName: lastName
        }
    })
    return user;
}

export { isDuplicate, createUser, allUsers, updateFirstAndLast, getTodoFromUser};