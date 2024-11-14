import mongoose, { Document, Schema } from 'mongoose';

interface ITodo extends Document {
  title: string;
  isCompleted: boolean;
}

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
