import mongoose from 'mongoose';

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

const List = mongoose.model('List', listSchema);

export default List;