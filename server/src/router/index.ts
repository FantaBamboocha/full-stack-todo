import { Router } from 'express';
import todoController from '../controllers/todoController.js';

const router = Router();

router.get('/todo', async (req, res, next) => {
  await todoController.getAllTodos(req, res, next);
});
router.post('/todo', async (req, res, next) => {
  await todoController.createTodo(req, res, next);
});
router.patch('/todo/:id/edit', async (req, res, next) => {
  await todoController.editTodo(req, res, next);
});
router.patch('/todo/:id/toggle', async (req, res, next) => {
  await todoController.toggleTodo(req, res, next);
});
router.delete('/todo/:id', async (req, res, next) => {
  await todoController.deleteTodo(req, res, next);
});

export default router;
