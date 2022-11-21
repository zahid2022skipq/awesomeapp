import { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.containerText}>Number Counter</Text>
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
    marginTop: 10,
    fontSize: 24,
  },
  btnView: {
    flexDirection: "row",
  },
  btn: {
    marginTop: 20,
    marginRight: 5,
    backgroundColor: "white",
    padding: 10,
  },
  counterText: {
    padding: 20,
    margin: 20,
    fontSize: 20,
  },
});
