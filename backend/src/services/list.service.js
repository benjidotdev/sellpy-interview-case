import { List } from '../models/index.js'

export const getLists = async () => {
  return List.find().populate('todos')
}
