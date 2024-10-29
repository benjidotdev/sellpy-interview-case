import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  list: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'List',
    required: true,
  }
}, {
  timestamps: true
});

todoSchema.index({ list: 1 });

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;