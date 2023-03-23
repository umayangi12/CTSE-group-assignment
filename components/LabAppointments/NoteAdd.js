import { View, Text, TextInput, TouchableOpacity, Alert} from "react-native";
import React, { useState } from "react";
import { firebase } from "../../config";
import { Keyboard, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
//date picker




const NoteAdd = () => {
  const navigation = useNavigation();
  const [testname, setTestname] = useState("");
  const [labpatientName, setlabPatientName] = useState("");
  const [age, setAge] = useState("");
  //date picker


  //date picker function

  //finish function




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
    //date picker start
  
    // date picker end
    firebase
      .firestore()
      .collection("Appointments")
      .add({
        TestName: testname,
        labPatientName: labpatientName,
        Age: age,
      })
      .then(() => {
        setlabPatientName("");
        setTestname("");
        setAge("");
        //datepicker start
      
        //datepicker end
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
      {/* Date Picker  Start*/}
      
      {/* Date Picker End */}
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
    backgroundColor: "light-blue",
  },
  inputTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    height: 50,
    width: "97%",
    borderBottomWidth: 1 / 2,
    borderLeftWidth: 1 / 2,
    padding: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
  },

});
