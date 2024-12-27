import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from "react-native";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        const evalResult = eval(input); // Avoid in production; use safer alternatives
        setResult(evalResult.toString());
      } catch {
        setResult("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const renderButton = (value, style = {}) => (
    <TouchableOpacity
      key={value}
      style={[styles.button, style]}
      onPress={() => handlePress(value)}
    >
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <TextInput
          style={styles.input}
          value={input}
          placeholder="Enter calculation"
          editable={false}
        />
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", "C", "=", "/"].map((btn) =>
          renderButton(btn, btn === "=" ? styles.equalButton : {})
        )}
      </View>
      <Text style={styles.footer}>Calc by [Rohan]</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  display: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    fontSize: 24,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    textAlign: "right",
  },
  result: {
    width: "100%",
    fontSize: 30,
    color: "#4caf50",
    textAlign: "right",
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  button: {
    width: "22%",
    height: 60,
    backgroundColor: "#d3d3d3",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 8,
  },
  equalButton: {
    backgroundColor: "#4caf50",
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
  footer: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 16,
    color: "#555",
  },
});

export default App;
