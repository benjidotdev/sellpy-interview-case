import { Todo } from '../models/index.js'

export const deleteTodos = async (ids) => {
  await Todo.deleteMany({ _id: { $in: ids } });
}