import { NextFunction, Request, Response } from 'express';

import todoService from '../service/todoService.js';

class TodoController {
  async getAllTodos(req: Request, res: Response, next: NextFunction) {
    try {
      const todos = await todoService.getAllTodos();

      return res.status(200).json(todos);
    } catch (error) {
      next(error);
    }
  }

  async createTodo(req: Request, res: Response, next: NextFunction) {
    const { title } = req.body;

    try {
      const todo = await todoService.createTodo(title);

      return res.status(201).json(todo);
    } catch (error) {
      next(error);
    }
  }

  async editTodo(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { title } = req.body;

    try {
      const todo = await todoService.editTodo(id, title);

      return res.status(200).json(todo);
    } catch (error) {
      next(error);
    }
  }

  async toggleTodo(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    try {
      const todo = await todoService.toggleTodo(id);

      return res.status(200).json(todo);
    } catch (error) {
      next(error);
    }
  }

  async deleteTodo(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    try {
      // const todo = await todoService.deleteTodo(id);
      // return res.status(200).json(todo);
      await todoService.deleteTodo(id);
      return res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
}

export default new TodoController();
