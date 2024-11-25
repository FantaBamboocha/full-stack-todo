import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";

import { ITodo } from "@definitions/ITodo";
import { Button } from "@components/index";

interface ITodoItemProps {
  todo: ITodo;
  onDelete: (id: number) => void;
  setIsEditable: (isCompleted: boolean) => void;
  onToggle: (id: number) => void;
}

export const TodoItem = React.memo(
  ({ todo, onDelete, onToggle, setIsEditable }: ITodoItemProps) => {
    const { id, title, isCompleted } = todo;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.divider} />
        <View style={styles.actions}>
          <Checkbox value={isCompleted} onValueChange={() => onToggle(id)} />
          <Text style={styles.checkboxText}>Completed</Text>
          <Button
            onPress={() => setIsEditable(true)}
            label="Edit"
            theme="primary"
          />
          <Button onPress={() => onDelete(id)} label="Delete" theme="danger" />
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 8,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  checkboxText: {
    fontSize: 16,
    marginLeft: 8,
  },
});
