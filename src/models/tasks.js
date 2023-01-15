import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'title must be provided'],
      minlength: [2, 'title must be between 2 and 20 characters'],
      maxlength: [20, 'title must be between 2 and 20 characters'],
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model('Task', schema);

export default Task;
