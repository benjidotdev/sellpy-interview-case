import { listService } from '../services/index.js';

export const getLists = async (req, res) => {
  const result = await listService.getLists();
  res.send(result);
};