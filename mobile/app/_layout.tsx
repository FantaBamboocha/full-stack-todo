import { Stack } from "expo-router";

import { TodosProvider } from "@context/TodosContext";

export default function RootLayout() {
  return (
    <TodosProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </TodosProvider>
  );
}
