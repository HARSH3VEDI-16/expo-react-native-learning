import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState, useContext } from "react";
import { router } from "expo-router";
import { TaskContext } from "../context/TaskContext";

export default function AddTaskScreen() {

  const [task, setTask] = useState("");
  const { addTask } = useContext(TaskContext);

  const handleAddTask = () => {
    if (!task.trim()) return;

    addTask(task);
    setTask("");
    router.back();
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Add New Task</Text>

      <TextInput
        placeholder="Enter task..."
        value={task}
        onChangeText={setTask}
        style={styles.input}
      />

      <Button title="Save Task" onPress={handleAddTask} />

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:20,
    justifyContent:"center"
  },

  title:{
    fontSize:22,
    fontWeight:"bold",
    marginBottom:20
  },

  input:{
    borderWidth:1,
    padding:10,
    marginBottom:20,
    borderRadius:8
  }

});