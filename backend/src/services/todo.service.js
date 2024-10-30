import { List, Todo } from '../models/index.js'

export const deleteTodo = async (id) => {
  const deletedTodo = await Todo.findByIdAndDelete(id);
  if (deletedTodo) {
    await List.findByIdAndUpdate(deletedTodo.list, { $pull: { todos: id } });
  }
  return deletedTodo;
};

export const getListTodos = async (listId) => {
  const list = await List.findById(listId).populate('todos');
  return list.todos;
}
export const saveListTodos = async (listId, todos) => {
  await Todo.deleteMany({ list: listId });
  const todoDocuments = todos.map((todo) => ({
    description: todo.description,
    dueBy: todo.dueBy,
    list: listId,
  }));  const result = await Todo.insertMany(todoDocuments);
  const todoIds = result.map((todo) => todo._id);
  await List.findByIdAndUpdate(listId, { $set: { todos: todoIds } });
  return todoIds;
};