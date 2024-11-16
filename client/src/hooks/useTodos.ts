import { useEffect, useState } from 'react';

import { ITodo } from '../definitions/ITodo';
import { todoApi } from '../api/todoApi';
import axios from 'axios';

export const useTodos = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [error, setError] = useState<string | null>(null);

  const getAllTodos = async () => {
    try {
      const response = await todoApi.getAllTodos();
      setTodos(response.data);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message);
      } else {
        setError('Something went wrong');
      }
    }
  };

  const createTodo = async (title: string) => {
    try {
      await todoApi.createTodo(title);
      getAllTodos();
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message);
      } else {
        setError('Something went wrong');
      }
    }
  };

  const editTodo = async (id: number, title: string, isCompleted: boolean) => {
    try {
      await todoApi.editTodo(id, title, isCompleted);
      getAllTodos();
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message);
      } else {
        setError('Something went wrong');
      }
    }
  };

  const toggleTodo = async (id: number) => {
    try {
      await todoApi.toggleTodo(id);
      getAllTodos();
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message);
      } else {
        setError('Something went wrong');
      }
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await todoApi.deleteTodo(id);
      getAllTodos();
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message);
      } else {
        setError('Something went wrong');
      }
    }
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  return {
    todos,
    error,
    getAllTodos,
    createTodo,
    editTodo,
    toggleTodo,
    deleteTodo,
  };
};
