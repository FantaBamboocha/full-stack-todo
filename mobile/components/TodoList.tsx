import { View } from "react-native";

import { ITodo } from "../definitions/ITodo";
import { TodoCard } from "./TodoCard";

interface TodoListProps {
  todos: ITodo[];
}

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <View>
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </View>
  );
};
