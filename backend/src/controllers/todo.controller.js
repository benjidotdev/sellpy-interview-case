import { todoService } from '../services/index.js'

export const deleteTodo = async (req, res) => {
  const result = await todoService.deleteTodo(req.params.id);
  res.send(result);
};