import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";

export default function Explore() {
  return (
    <View style={styles.container}>

      {/* Text Example */}
      <Text style={styles.title}>
        Welcome <Text style={styles.bold}>Harsh</Text>
      </Text>

      {/* Image Example */}
      <Image
        source={{ uri: "https://picsum.photos/200" }}
        style={styles.image}
      />

      {/* ImageBackground Example */}
      <ImageBackground
        source={{ uri: "https://picsum.photos/400/200" }}
        style={styles.banner}
      >
        <Text style={styles.bannerText}>Banner Text</Text>
      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },

  title: {
    fontSize: 22,
  },

  bold: {
    fontWeight: "bold",
  },

  image: {
    width: 200,
    height: 200,
  },

  banner: {
    width: 300,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },

  bannerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});