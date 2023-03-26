import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';

const BmiCalculator = () => {
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [bmi, setBmi] = useState('')
    const [description, setDescription] = useState('')

    const calculateBmi = () => {
      //bmi calcualtion formula
        const bmi = weight / ((height/100) * (height/100))
        setBmi(bmi.toFixed(1))

        if(bmi < 18.5) {
            setDescription('Underweight, eat More!!')
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            setDescription('Normal, Keep it up!')
        }else if (bmi >=25 && bmi <= 29.9) {
            setDescription('Overweight, Start working out!')
        }else if (bmi >= 30 ) {
            setDescription('Obese, Hit the gym!')
        }
    }
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Check your BMI</Text>
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
        <TouchableOpacity style={styles.button} onPress={calculateBmi}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
        <View style={styles.resultview}>
          {/* Display the bmi value */}
            <Text style={styles.result}>BMI = {bmi}</Text>
          {/* Display the bmi result */}
            <Text style={styles.result}>{description}</Text>

        </View>
      </View>
    );
}

export default BmiCalculator

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
    backgroundColor: "#88A1DA",
    fontSize: 18,
  },
  button: {
    height: 55,
    margin: 15,
    borderWidth: 1 / 2,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#1A1D63",
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
    color: "#2227A0",
    fontWeight: '800'
  },
});