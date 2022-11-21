import { useState } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Text Pressed");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.containerText} onPress={handlePress}>
        Number Counter
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
  },
  containerText: {
    marginTop: 44,
    fontSize: 24,
  },
});
