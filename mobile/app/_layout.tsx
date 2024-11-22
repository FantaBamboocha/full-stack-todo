import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
      {/* <Stack.Screen name="index" options={{ title: "Todos" }} /> */}
      {/* <Stack.Screen name="createTodo" options={{ title: "New Todo" }} /> */}
    </Stack>
  );
}
