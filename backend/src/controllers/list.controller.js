import { listService, todoService } from '../services/index.js'

export const getLists = async (req, res) => {
  const result = await listService.getLists();
  res.send(result);
};

export const getListTodos = async (req, res) => {
  const result = await todoService.getListTodos(req.params.id);
  res.send(result);
}

export const saveListTodos = async (req, res) => {
  const result = await todoService.saveListTodos(req.params.id, req.body);
  res.send(result);
};