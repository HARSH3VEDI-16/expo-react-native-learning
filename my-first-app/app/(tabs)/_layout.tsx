import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Tabs are nested */}
      <Stack.Screen name="(tabs)/index" options={{ headerShown: false }} />

      {/* Modal screen */}
      <Stack.Screen 
        name="add-task" 
        options={{ presentation: "modal", title: "Add Task" }} 
      />
    </Stack>
  );
}