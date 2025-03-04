import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";
import React from "react";
export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not fouund" }} />
      <View style={styles.container}>
        <Link href="/" style={styles.buttons}>
          Go back to Home Screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    fontSize: 18,
    marginTop: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
