import { listService } from '../services/index.js';

export const getLists = async (req, res) => {
  const result = await listService.getLists();
  res.send(result);
};

export const createList = async (req, res) => {
  const result = await listService.createList(req.body);
  res.send(result);
}

export const getList = async (req, res) => {
  const result = await listService.getList(req.params.id);
  res.send(result);
}