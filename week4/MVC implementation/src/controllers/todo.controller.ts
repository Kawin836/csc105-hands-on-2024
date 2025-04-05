import type { Context } from 'hono';
import * as TodoModel from '../models/todo.model.ts';
import { todos } from '../models/todo.model.ts';
import type { CreateTodoInput, Todo, UpdateTodoInput } from '../types/index.ts';

// Get all todos
export async function getTodos(c: Context) {
	// Check for query parameters
	const completed = c.req.query('completed');

	let todos;
	if (completed === 'true') {
		todos = TodoModel.findByCompleted(true);
	} else if (completed === 'false') {
		todos = TodoModel.findByCompleted(false);
	} else {
		todos = TodoModel.findAll();
	}

	return c.json(todos);
}

// Get a specific todo
export async function getTodo(c: Context) {
    // WITH PARAM id
	// IMPLEMENT HERE
    const id = c.get('id');
    const todo = todos.find((todo) => todo.id == id);
    if (todo != undefined) {
        return c.json({
            success: true,
            data: todo,
            msg: 'Todo Found!!',
        })
    } else {
        return c.json({
            success: false,
            msg: 'Todo not found!'
        })
    }
}

// Create a new todo
export async function createTodo(c: Context) {
	const input = c.get('todoData') as CreateTodoInput;
	const newTodo = TodoModel.create(input);

	return c.json(newTodo, 201);
}

// Update a todo completely
export async function updateTodo(c: Context) {
	const id = parseInt(c.req.param('id'));
	const input = c.get('todoData') as Todo;

	const updatedTodo = TodoModel.update(id, input);

	if (!updatedTodo) {
		return c.json({ error: 'Todo not found' }, 404);
	}

	return c.json(updatedTodo);
}

// Update a todo partially
export async function patchTodo(c: Context) {
	const id = parseInt(c.req.param('id'));
	const input = c.get('todoData') as UpdateTodoInput;

	const patchedTodo = TodoModel.patch(id, input);

	if (!patchedTodo) {
		return c.json({ error: 'Todo not found' }, 404);
	}

	return c.json(patchedTodo);
}

// Delete a todo
export async function deleteTodo(c: Context) {
    const idParam = c.req.param('id');
    if (!/^\d+$/.test(idParam)) {
		// IMPLEMENT HERE
        return c.json("Invalid variable type")
	}

    const id = parseInt(idParam);
    const index = todos.findLastIndex((todo) => todo.id == id);
    if (index == -1) {
        return c.json({
        success: false,
        msg: 'todo not found'
        })
    }
    const deletedTodo = todos[id] // IMPLEMENT HERE
    todos.splice(index, 1)

	return c.json({
		message: 'Todo deleted successfully',
		deleted: deletedTodo,
	});
}

// Search todos
export async function searchTodos(c: Context) {
	const term = c.req.query('q');

	if (!term) {
		return c.json("Invalid variable type")
	}

	const results = TodoModel.search(term);

	return c.json({
		results: results,
		count: results.length,
		term: term,
	});
}