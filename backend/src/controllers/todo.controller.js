import httpStatus from 'http-status'
import { todoService } from '../services/index.js'

export const deleteTodo = async (req, res) => {
  const result = await todoService.deleteTodo(req.body.id)
  if (!result) return res.sendStatus(httpStatus.NOT_FOUND)
  res.status(httpStatus.NO_CONTENT).send(result)
}
