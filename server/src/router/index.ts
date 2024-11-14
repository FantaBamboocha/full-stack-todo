import { Router } from 'express';
import todoController from '../controllers/todoController.js';

const router = Router();

router.get('/todo', todoController.getAllTodos);
router.post('/todo', todoController.createTodo);
router.patch('/todo/:id/edit', todoController.editTodo);
router.patch('/todo/:id/toggle', todoController.toggleTodo);
router.delete('/todo/:id', todoController.deleteTodo);

export default router;
