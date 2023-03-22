import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { firebase } from "../../config";
import { Keyboard, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AddAppointment = () => {
  const navigation = useNavigation();
  const [patientTite, setPatientTite] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientnic, setPatientnic] = useState("");
  const [patientArea, setPatientArea] = useState("");

  const handleAdd = () => {
    if (!patientTite.trim()) {
      alert("Title");
      return;
    }
    if (!patientName.trim()) {
      alert("Patient Name");
      return;
    }
    if (!patientPhone.trim()) {
      alert("07xxxxxxxx");
      return;
    } 
    if (!patientnic.trim()) {
      alert("NIC number");
      return;
    }
    if (!patientArea.trim()) {
      alert("Enter your closest city");
      return;
    }
    firebase
      .firestore()
      .collection("Appointments")
      .add({
        PatientTitle: patientTite,
        PatientName: patientName,
        PatientPhone: patientPhone,
        Patientnic: patientnic,
        PatientArea: patientArea,
      })
      .then(() => {
        setPatientTite("");
        setPatientName("");
        setPatientPhone("");
        setPatientnic("");
        setPatientArea("");
        Keyboard.dismiss();
        Alert.alert("Appointment Booked Successfully!");
        navigation.navigate("ViewAppointment");
      })
      .catch((e) => alert(e));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        value={patientTite}
        onChangeText={(e) => setPatientTite(e)}
        style={styles.inputTitle}
      />
      <TextInput
        placeholder="Patient Name *"
        value={patientName}
        onChangeText={(e) => setPatientName(e)}
        style={styles.inputTitle}
      />
      <TextInput
        placeholder="Telephone No *"
        value={patientPhone}
        onChangeText={(e) => setPatientPhone(e)}
        style={styles.inputTitle}
      />
      <TextInput
        placeholder="NIC/Passport No *"
        value={patientnic}
        onChangeText={(e) => setPatientnic(e)}
        style={styles.inputTitle}
      />
      <TextInput
        placeholder="Area"
        value={patientArea}
        onChangeText={(e) => setPatientArea(e)}
        style={styles.inputTitle}
      />
      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddAppointment;

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
