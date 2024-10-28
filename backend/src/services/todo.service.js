import { Todo } from '../models/index.js'

export const createTodo = async (todo) => {
  return Todo.create(todo);
};

export const deleteTodos = async (ids) => {
  await Todo.deleteMany({ _id: { $in: ids } });
};