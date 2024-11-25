import { useCallback, useState } from "react";
import { View, StyleSheet } from "react-native";

import { Button, CreateTodoModal } from "@components/index";
import { useTodosContext } from "@hooks/useTodosContext";

export default function CreateTodoScreen() {
  const { createTodo } = useTodosContext();
  const [isVisible, setIsVisible] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  const handleChange = useCallback((text: string) => {
    setNewTodo(text);
  }, []);

  const handleCreateTodo = useCallback(async () => {
    // if (!newTodo.trim()) return;

    createTodo(newTodo);
    setNewTodo("");
  }, [createTodo, newTodo]);
  const handlePress = () => {
    setIsVisible(true);
  };

  return (
    <View style={styles.container}>
      <Button label="Create" theme="primary" onPress={handlePress} />
      <CreateTodoModal
        isVisible={isVisible}
        onClose={() => {
          setIsVisible(false);
          setNewTodo("");
        }}
        newTodo={newTodo}
        onChange={handleChange}
        onSubmit={handleCreateTodo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
