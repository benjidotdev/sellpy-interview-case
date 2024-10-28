import { List } from '../models/index.js'

import { deleteTodos } from './todo.service.js';

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

export const deleteList = async (id) => {
  const list = await List.findByIdAndDelete(id);
  if (list) {
    await deleteTodos(list.todos);
  }
  return list;
}
