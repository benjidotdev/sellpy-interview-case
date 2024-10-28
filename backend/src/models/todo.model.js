import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  description: {
    type: String,
  }
}, {
  timestamps: true
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;