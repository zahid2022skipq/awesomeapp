import { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [text, setText] = useState(0);
  const [logD, setLogD] = useState([]);
  const [display, setDisplay] = useState(false);
  const handlePress = () => {
    const newText = text + 1;
    setText(newText);
    const loged = logD;
    loged.push(newText);
    setLogD(loged);
  };
  const handleReset = () => {
    setText(0);
    const loged = logD;
    loged.push(0);
    setLogD(loged);
  };

  const handleAdd = () => {
    const newText = text + 2;
    setText(newText);
    const loged = logD;
    console.log(loged);
    loged.push(newText);
    setLogD(loged);
  };

  const logdata = () => {
    setDisplay(!display);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.containerText}>Number Counter</Text>
      <Text style={styles.counterText}>{text}</Text>
      {display ? (
        logD.map((d, i) => <Text key={i}>{i + " --> " + d}</Text>)
      ) : (
        <Text></Text>
      )}

      <View style={styles.btnView}>
        <TouchableOpacity style={styles.btn} onPress={handlePress}>
          <Text>Count</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={handleReset}>
          <Text>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={handleAdd}>
          <Text>Add 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={logdata}>
          <Text>Log Data</Text>
        </TouchableOpacity>
      </View>
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
