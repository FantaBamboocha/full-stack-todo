import { axiosIstance } from './axiosIstance';

export const todoApi = {
  getAllTodos: async () => {
    return await axiosIstance.get('/');
  },

  createTodo: async (title: string) => {
    return await axiosIstance.post('/', { title });
  },

  editTodo: async (id: number, title: string, isCompleted: boolean) => {
    return await axiosIstance.put(`/${id}/edit`, { title, isCompleted });
  },

  toggleTodo: async (id: number) => {
    return await axiosIstance.put(`/${id}/toggle`);
  },

  deleteTodo: async (id: number) => {
    return await axiosIstance.delete(`/${id}`);
  },
};
