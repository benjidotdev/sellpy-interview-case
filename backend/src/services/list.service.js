import { List } from '../models/index.js'

export const getLists = async () => {
  return List.find().populate('todos');
};

export const createList = async (list) => {
  return List.create(list);
};

export const getList = async (id) => {
  return List.findById(id).populate('todos');
}

export const updateList = async (id, list) => {
  return List.findByIdAndUpdate(id, list, { new: true });
}
