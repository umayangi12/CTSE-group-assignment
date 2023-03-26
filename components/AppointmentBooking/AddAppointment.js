import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { firebase } from "../../config";
import { Keyboard, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppointmentCard from "./AppointmentCard";

const AddAppointment = () => {
  const navigation = useNavigation();
  const [patientTite, setPatientTite] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientnic, setPatientnic] = useState("");
  const [patientArea, setPatientArea] = useState("");

  //empty field validation
  const handleAdd = () => {
    if (!patientTite.trim()) {
      alert("Please enter a title");
      return;
    }
    if (!patientName.trim()) {
      alert("Please enter the patient Name");
      return;
    }
    if (!patientPhone.trim()) {
      alert("Please enter the phone number");
      return;
    }
    if (!patientnic.trim()) {
      alert("Please enter the nic/passport");
      return;
    }
    if (!patientArea.trim()) {
      alert("Please enter the city");
      return;
    }

    //adding new document to the Appointments collection
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

      //Promise-based method call
      .then(() => {
        setPatientTite("");
        setPatientName("");
        setPatientPhone("");
        setPatientnic("");
        setPatientArea("");
        Keyboard.dismiss();
        Alert.alert("Appointment Booked Successfully!"); //success message
        navigation.navigate("ViewAppointment"); //navigate to view appointment page
      })
      .catch((e) => alert(e));
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <AppointmentCard />
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
          inputMode="numeric"
          keyBoardType="numeric"
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
        {/* <Button
          style={styles.buttonText}
          title="BOOK"
          color="blue"
          oonPress={handleAdd}
        /> */}
        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}>BOOK</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddAppointment;

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
  buttonText: {
    color: "black",
    fontSize: 22,
    fontWeight: "800",
  },
  scrollView: {
    backgroundColor: "#A9B0E0",
    marginHorizontal: -10,
  },
  button: {
    marginTop: 5,
    height: 40,
    width: 210,
    backgroundColor: "#026efd",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
