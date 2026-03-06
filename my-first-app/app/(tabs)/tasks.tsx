import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Tasks() {
  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
      <Text>Tasks Screen</Text>

      <Link href="/" asChild>
        <Pressable>
          <Text style={{ marginTop:20, color:"blue" }}>
            Go Back Home
          </Text>
        </Pressable>
      </Link>

    </View>
  );
}