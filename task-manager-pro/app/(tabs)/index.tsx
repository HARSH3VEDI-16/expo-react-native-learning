import { View, Text, FlatList, TouchableOpacity, StyleSheet, LayoutAnimation, useColorScheme } from "react-native";
import { useContext } from "react";
import { router } from "expo-router";
import { TaskContext } from "../../context/TaskContext";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {

  const { tasks, deleteTask, toggleTask } = useContext(TaskContext);

  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const colors = {
    background: isDark ? "#121212" : "#f2f2f2",
    card: isDark ? "#1e1e1e" : "#ffffff",
    text: isDark ? "#ffffff" : "#000000",
    subText: isDark ? "#aaaaaa" : "#666666"
  };

  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;

  const handleToggle = (index:number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    toggleTask(index);
  };

  const handleDelete = (index:number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    deleteTask(index);
  };

  return (

    <View style={[styles.container,{backgroundColor:colors.background}]}>

      <View style={[styles.dashboard,{backgroundColor:colors.card}]}>
        <Text style={{color:colors.text}}>Total: {total}</Text>
        <Text style={{color:colors.text}}>Pending: {pending}</Text>
        <Text style={{color:colors.text}}>Completed: {completed}</Text>
      </View>

      {tasks.length === 0 ? (

        <View style={styles.emptyContainer}>
          <Text style={[styles.emptyText,{color:colors.text}]}>No Tasks Yet</Text>
          <Text style={[styles.emptySubText,{color:colors.subText}]}>Tap + to add your first task</Text>
        </View>

      ) : (

        <FlatList
          data={tasks}
          keyExtractor={(item,index)=>index.toString()}
          contentContainerStyle={{marginTop:20}}
          renderItem={({item,index})=>(
            <View style={[styles.card,{backgroundColor:colors.card}]}>

              <TouchableOpacity onPress={()=>handleToggle(index)}>
                <Text style={[
                  styles.taskText,
                  {color:colors.text},
                  item.completed && styles.completedTask
                ]}>
                  {item.completed ? "✅ " : "⬜ "} {item.title}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>handleDelete(index)}>
                <Ionicons name="trash" size={22} color="red" />
              </TouchableOpacity>

            </View>
          )}
        />

      )}

      <TouchableOpacity
        style={styles.fab}
        onPress={()=>router.push("/add-task")}
      >
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>

    </View>

  );
}

const styles = StyleSheet.create({

container:{
flex:1,
padding:20
},

dashboard:{
flexDirection:"row",
justifyContent:"space-between",
padding:12,
borderRadius:10,
marginTop:10
},

card:{
padding:15,
borderRadius:10,
marginBottom:12,
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
elevation:3
},

taskText:{
fontSize:16
},

completedTask:{
textDecorationLine:"line-through",
color:"gray"
},

emptyContainer:{
flex:1,
justifyContent:"center",
alignItems:"center"
},

emptyText:{
fontSize:22,
fontWeight:"bold"
},

emptySubText:{
marginTop:10
},

fab:{
position:"absolute",
right:20,
bottom:30,
backgroundColor:"#007AFF",
width:60,
height:60,
borderRadius:30,
justifyContent:"center",
alignItems:"center",
elevation:5
}

});