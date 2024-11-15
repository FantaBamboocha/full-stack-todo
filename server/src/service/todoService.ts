import { ITodo } from '../definitions/ITodo.js';
import ApiError from '../exceptions/api-error.js';
import todoModel from '../models/todoModel.js';

class TodoService {
  async getAllTodos() {
    const todos = await todoModel.find();

    return todos;
  }

  async createTodo(title: string) {
    if (!title) {
      throw ApiError.BadRequest('Title is required');
    }
    return await todoModel.create({ title });
  }

  async editTodo(id: string, data: ITodo) {
    if (!data.title) {
      throw ApiError.BadRequest('Title is required');
    }

    const updatedTodo = await todoModel.findByIdAndUpdate(
      id,
      { ...data },
      { new: true },
    );

    if (!updatedTodo) {
      throw ApiError.NotFound('Todo not found');
    }
    return updatedTodo;
  }

  async toggleTodo(id: string) {
    // исрользование метода findOneAndUpdate обусловлено невозможностью применения
    // оператора агрегации $not в операции обновления findByIdAndUpdate
    const updatedTodo = await todoModel.findOneAndUpdate(
      { _id: id },
      [{ $set: { isCompleted: { $not: '$isCompleted' } } }],
      { new: true },
    );

    if (!updatedTodo) {
      throw ApiError.NotFound('Todo not found');
    }

    return updatedTodo;
  }

  async deleteTodo(id: string) {
    const todo = await todoModel.findByIdAndDelete(id);

    if (!todo) {
      throw ApiError.NotFound('Todo not found');
    }

    return todo;
  }
}

export default new TodoService();
