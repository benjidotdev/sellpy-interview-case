import { Todo } from '../models/index.js'

export const createTodo = async (todo) => {
  return Todo.create(todo);
};

export const deleteTodos = async (ids) => {
  await Todo.deleteMany({ _id: { $in: ids } });
};

export const updateTodo = async (id, todo) => {
  return Todo.findByIdAndUpdate(id, todo, { new: true });
};
