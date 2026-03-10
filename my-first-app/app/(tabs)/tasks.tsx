import { View, Text, FlatList, StyleSheet } from "react-native";

const tasks = [
  { id: "1", title: "Learn React Native" },
  { id: "2", title: "Build TaskFlow App" },
  { id: "3", title: "Practice FlatList" }
];

export default function Tasks() {
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  item: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 8
  },
  text: {
    fontSize: 16
  }
});