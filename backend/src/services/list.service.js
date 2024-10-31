import { List, Todo } from '../models/index.js'

export const getLists = async () => {
  return List.find().populate('todos')
}

export const getListTodos = async (listId) => {
  const { todos } = await List.findById(listId).populate('todos')
  return todos
}

export const saveListTodos = async (listId, todos) => {
  if (!todos.length) return []
  await Todo.deleteMany({ list: listId })
  const todoDocuments = todos.map((todo) => ({
    description: todo.description,
    dueBy: todo.dueBy,
    list: listId,
  }))
  const result = await Todo.insertMany(todoDocuments)
  const todoIds = result.map((todo) => todo._id)
  await List.findByIdAndUpdate(listId, { $set: { todos: todoIds } })
  return await getListTodos(listId)
}
