import { Pressable, StyleSheet, Text } from "react-native";

interface ButtonProps {
  label: string;
  theme: "primary" | "danger";
  onPress?: () => void;
}

export const Button = ({ label, theme, onPress }: ButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
        styles.button,
        styles[theme],
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonLabel}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },

  primary: {
    backgroundColor: "#3772FF",
  },

  danger: {
    backgroundColor: "#EB5757",
  },
});
