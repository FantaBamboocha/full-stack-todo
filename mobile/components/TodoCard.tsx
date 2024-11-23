import { Text, View, StyleSheet } from "react-native";

import { ITodo } from "../definitions/ITodo";

interface TodoCardProps {
  todo: ITodo;
}

export const TodoCard = ({ todo }: TodoCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{todo.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 16,
    color: "#666",
  },
});
