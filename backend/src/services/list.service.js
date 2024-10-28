import { List } from '../models/index.js'

export const getLists = async () => {
  return List.find().populate('todos');
};

export const createList = async (list) => {
  return List.create(list);
};