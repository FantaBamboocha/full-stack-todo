import mongoose, { Schema } from 'mongoose';

import { ITodo } from '../definitions/ITodo.js';

const TodoSchema: Schema<ITodo> = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

TodoSchema.method('toJSON', function () {
  const { _id, ...object } = this.toObject();
  (object as { id: string } & ITodo).id = (
    _id as mongoose.Types.ObjectId
  ).toString();
  return object;
});

export default mongoose.model<ITodo>('Todo', TodoSchema);
