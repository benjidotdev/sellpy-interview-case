import { List, Todo } from '../models/index.js'

export const createTodo = async (todo) => {
  const newTodo = await Todo.create(todo);
  await List.findByIdAndUpdate(todo.list, { $addToSet: { todos: newTodo._id } });
  return newTodo;
};

export const deleteTodos = async (ids) => {
  await Todo.deleteMany({ _id: { $in: ids } });
};

export const updateTodo = async (id, todo) => {
  return Todo.findByIdAndUpdate(id, todo, { new: true });
};

export const deleteTodo = async (id) => {
  const deletedTodo = await Todo.findByIdAndDelete(id);
  if (deletedTodo) {
    await List.findByIdAndUpdate(deletedTodo.list, { $pull: { todos: id } });
  }
  return deletedTodo;
};