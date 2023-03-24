import { View, Text, TextInput, TouchableOpacity, Alert} from "react-native";
import React, { useState } from "react";
import { firebase } from "../../config";
import { Keyboard, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NoteAdd = () => {
  const navigation = useNavigation();
  const [testname, setTestname] = useState("");
  const [labpatientName, setlabPatientName] = useState("");
  const [age, setAge] = useState("");
  
  const handleAdd = () => {
    if (!testname.trim()) {
      alert("Please Enter Test Name");
      return;
    }
    if (!labpatientName.trim()) {
      alert("Please Enter Patient Name");
      return;
    }
    if (!age.trim()) {
      alert("Please Enter Age");
      return;
    }
    firebase
      .firestore()
      .collection("labAppointments")
      .add({
        TestName: testname,
        labPatientName: labpatientName,
        Age: age,
      })
      .then(() => {
        setlabPatientName("");
        setTestname("");
        setAge("");
        Keyboard.dismiss();
        Alert.alert("Details Added Successfully");
        navigation.navigate("Home");
      })
      .catch((e) => alert(e));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Patient Name"
        value={labpatientName}
        onChangeText={(e) => setlabPatientName(e)}
        style={styles.inputTitle}
      />
      <TextInput
        placeholder="TestName"
        value={testname}
        onChangeText={(e) => setTestname(e)}
        style={styles.inputTitle}
      />
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={(e) => setAge(e)}
        style={styles.inputTitle}
      /> 
      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoteAdd;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#A9B0E0",
  },
  inputTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 10,
    height: 45,
    width: "90%",
    borderBottomWidth: 1 / 2,
    borderLeftWidth: 1 / 2,
    borderRightWidth: 1 / 2,
    borderTopWidth: 1 / 2,
    padding: 10,
    borderRadius: 7,
    borderColor: "black",
    backgroundColor: "#fff",
    opacity: 0.7,
  },
  button: {
    marginTop: 20,
    height: 50,
    width: 230,
    backgroundColor: "#026efd",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
  },
});
