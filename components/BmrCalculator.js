import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const BmrCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [bmr, setBmr] = useState("");
//   const [description, setDescription] = useState("");

  const calculateBmr = () => {
    const bmr = (88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age));
    setBmr(bmr.toFixed(1));
  }
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Check your BMR</Text>
      </View>
      <TextInput
        style={styles.input}
        value={weight}
        onChangeText={(text) => setWeight(text)}
        placeholder="Weight in kg"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={height}
        onChangeText={(text) => setHeight(text)}
        placeholder="Height in cm"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={(text) => setAge(text)}
        placeholder="Age in years"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={calculateBmr}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
      <View style={styles.resultview}>
        <Text style={styles.result}>Your BMR is</Text>
        <Text style={styles.result}>{bmr}</Text>
      </View>
    </View>
  );
};

export default BmrCalculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    backgroundColor: "#fff",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 10,
    width: 350,
    marginLeft: 20,
    marginTop: 10,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  input: {
    height: 55,
    margin: 15,
    borderWidth: 1 / 2,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#AAF1CD",
    fontSize: 18,
  },
  button: {
    height: 55,
    margin: 15,
    borderWidth: 1 / 2,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#05984F",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  resultview: {
    margin: 15,
  },
  result: {
    fontSize: 30,
    color: "#034E29",
    fontWeight: "800",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 95,
  },
});
