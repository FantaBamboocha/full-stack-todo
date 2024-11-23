import { Text, View, StyleSheet } from "react-native";
// import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useTodos } from "../../hooks/useTodos";
import { TodoList } from "../../components/TodoList";

export default function Index() {
  const { todos, error, createTodo, editTodo, toggleTodo, deleteTodo } =
    useTodos();
  return (
    // <GestureHandlerRootView style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.text}> Todo List</Text>
      <TodoList todos={todos}></TodoList>
    </View>
    // </GestureHandlerRootView>
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
});
