import mongoose from 'mongoose';
import toJSON from './plugins/toJSON.js'

const listSchema = new mongoose.Schema({
  title: {
    type: String,
    default: 'user',
  },
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Todo',
    },
  ]
}, {
  timestamps: true
});

listSchema.plugin(toJSON);

const List = mongoose.model('List', listSchema);

export default List;