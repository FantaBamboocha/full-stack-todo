import { Text, View, StyleSheet } from "react-native";

import { TodoItemWrapper } from "@components/index";
import { useTodosContext } from "@hooks/useTodosContext";

export default function Index() {
  const { todos, editTodo, toggleTodo, deleteTodo } = useTodosContext();
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Todo List</Text>
      <View style={styles.list}>
        {todos.map((todo) => (
          <TodoItemWrapper
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            onEdit={editTodo}
            onToggle={toggleTodo}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#25292e",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },

  list: {
    gap: 8,
  },
});
