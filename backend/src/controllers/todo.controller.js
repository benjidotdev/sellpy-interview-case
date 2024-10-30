import httpStatus from 'http-status'
import { todoService } from '../services/index.js'

export const deleteTodo = async (req, res) => {
  const result = await todoService.deleteTodo(req.params.id)
  res.status(httpStatus.NO_CONTENT).send(result)
}
