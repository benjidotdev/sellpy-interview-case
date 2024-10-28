import { todoService } from '../services/index.js'

export const createTodo = async (req, res) => {
  const result = await todoService.createTodo(req.body);
  res.send(result);
}

export const updateTodo = async (req, res) => {
  const result = await todoService.updateTodo(req.params.id, req.body);
  res.send(result);
}