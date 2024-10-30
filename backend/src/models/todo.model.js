import mongoose from 'mongoose';
import toJSON from './plugins/toJSON.js'

const todoSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  dueBy: {
    type: Date,
    validate: {
      validator: (date) => {
        return date instanceof Date;
      },
      message: 'Invalid date'
    }
  },
  list: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'List',
    required: true,
  }
}, {
  timestamps: true
});

todoSchema.plugin(toJSON);

todoSchema.index({ list: 1 });

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;