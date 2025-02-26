import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
      <Link href="/" style={styles.button}>
        Back to Home
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 18,
    color: "#fff",
    textDecorationLine: "underline",
    marginTop: 20,
  },
});
