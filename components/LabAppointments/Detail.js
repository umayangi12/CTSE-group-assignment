import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { firebase } from "../../config";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Detail = ({ route }) => {
  const navigation = useNavigation();
  const [testname, setTestname] = useState(route.params.item.TestName);
  const [labpatientName, setlabPatientName] = useState(route.params.item.labPatientName);
  const [age, setAge] = useState(route.params.item.Age);
 

  const Appointments = firebase.firestore().collection("labAppointments");

  const handleUpdate = () => {
    if (labpatientName && labpatientName.length > 0) {
      Appointments.doc(route.params.item.key)
        .update({
          labPatientName: labpatientName,
          TestName: testname,
          Age: age,
        
        })
        .then(() => {
          navigation.navigate("Home");
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  //handle delete
  const handleDelete = () => {
    Appointments.doc(route.params.item.key)
      .delete()
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View style={styles.container}>
      {console.log(route.params.item.key)}
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
    
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonText}>UPDATE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleDelete}>
          <Text style={styles.buttonText}>DELETE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#A9B0E0",
  },
  inputTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    height: 50,
    width: "97%",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "97%",
  },
  button: {
    backgroundColor: "#026efd",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
