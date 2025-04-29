import type { Context } from "hono";
import * as userModel from "../models/user.model.ts";

type createUserBody = {
	firstName: string;
	lastName: string;
};
const createUser = async (c: Context) => {
	try {
		const body = await c.req.json<createUserBody>();
		if (!body.firstName || !body.lastName)
			return c.json(
				{
					success: false,
					data: null,
					msg: "Missing required fields",
				},
				400
			);
		if (await userModel.isDuplicate(body.firstName, body.lastName)) {
			return c.json({
				success: false,
				data: null,
				msg: "firstName or lastName is duplicated",
			});
		}
		const newUser = await userModel.createUser(
			body.firstName,
			body.lastName
		);
		return c.json({
			success: true,
			data: newUser,
			msg: "Created new User!",
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
};

// 1) Create API to get all users 
const allUsers = async (c: Context) => {
	try {
		const user = await userModel.allUsers();
		return c.json(user);
	} catch (e) {
		return c.json({
			success: false,
			data: null,
			msg: `${e}`,
		})
	}
}

// 4) Create API to get all todo of one user
const getTodoFromUser = async (c: Context) => {
	try {
		const id = Number(c.req.param("id"));
		const todo = await userModel.getTodoFromUser(id);
		return c.json(todo);
	} catch (e) {
		return c.json({
			success: false,
			data: null,
			msg: `${e}`,
		})
	}
}

// 5) Create API to edit firstname and lastname of user.
const updateFirstAndLast = async (c: Context) => {
	try {
		const {id, firstName, lastName } = await c.req.json();
		const user = await userModel.updateFirstAndLast(id, firstName, lastName);
		return c.json(user);
	} catch (e) {
		return c.json({
			success: false,
			data: null,
			msg: `${e}`,
		})
	}
}
export { createUser, allUsers, updateFirstAndLast,getTodoFromUser };