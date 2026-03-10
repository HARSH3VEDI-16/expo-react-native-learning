import { View, Text, TextInput, Button } from "react-native";
import { useState, useContext } from "react";
import { useLocalSearchParams, router } from "expo-router";
import { TaskContext } from "../context/TaskContext";

export default function EditTaskScreen() {
  const { index } = useLocalSearchParams();
  const { tasks, editTask } = useContext(TaskContext);

  const [task, setTask] = useState(tasks[Number(index)]?.title || "");

  const handleSave = () => {
    editTask(Number(index), task);
    router.back();
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Edit Task</Text>

      <TextInput
        value={task}
        onChangeText={setTask}
        style={{ borderWidth: 1, padding: 10, marginVertical: 20 }}
      />

      <Button title="Save Changes" onPress={handleSave} />
    </View>
  );
}