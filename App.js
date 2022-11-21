import { useState } from "react";
import { StyleSheet, Text, SafeAreaView, Image } from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Text Pressed");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.containerText} onPress={handlePress}>
        Hello WOrld
      </Text>
      <Image source={require("./assets/logo.png")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
