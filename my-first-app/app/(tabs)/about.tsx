import { View, Text, SectionList } from "react-native";

const DATA = [
  {
    title: "Work",
    data: ["Meeting", "Code Review"],
  },
  {
    title: "Personal",
    data: ["Gym", "Shopping"],
  },
];

export default function About() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Text style={{ padding: 8 }}>{item}</Text>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            {title}
          </Text>
        )}
      />
    </View>
  );
}