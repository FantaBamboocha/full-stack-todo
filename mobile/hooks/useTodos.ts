import { useCallback, useEffect, useState } from "react";
import axios from "axios";

import { ITodo } from "@definitions/ITodo";
import { todoApi } from "@api/todoApi";

// нарушил принцип DRY в блоках catch
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
        setError("Something went wrong");
      }
    }
  };

  const createTodo = async (title: string) => {
    try {
      const newTodo = await todoApi.createTodo(title);
      setTodos((prevTodos) => [...prevTodos, newTodo.data]);
      // getAllTodos();
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message);
      } else {
        setError("Something went wrong");
      }
    }
  };

  const editTodo = useCallback(
    async (id: number, title: string, isCompleted: boolean) => {
      try {
        const editedTodo = await todoApi.editTodo(id, title, isCompleted);
        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo.id === id ? editedTodo.data : todo)),
        );
        // getAllTodos();
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          setError(error.response?.data?.message);
        } else {
          setError("Something went wrong");
        }
      }
    },
    [],
  );

  const toggleTodo = useCallback(async (id: number) => {
    try {
      const toggledTodo = await todoApi.toggleTodo(id);
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? toggledTodo.data : todo)),
      );
      // getAllTodos();
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message);
      } else {
        setError("Something went wrong");
      }
    }
  }, []);

  const deleteTodo = useCallback(async (id: number) => {
    try {
      await todoApi.deleteTodo(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      // getAllTodos();
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message);
      } else {
        setError("Something went wrong");
      }
    }
  }, []);

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
