import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function AddTaskModal() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Add Task Details Here</Text>
      <Button title="Close" onPress={() => router.back()} />
    </View>
  );
}