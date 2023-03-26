import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";
import { firebase } from "../../config";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Alert } from "react-native";
import AppointmentCard from "./AppointmentCard";

const UpdateAppointment = ({ route }) => {
  const navigation = useNavigation();

  // set up state variables for each of the patient details
  const [patientTite, setPatientTite] = useState(
    route.params.item.PatientTitle
  );
  const [patientName, setPatientName] = useState(route.params.item.PatientName);
  const [patientPhone, setPatientPhone] = useState(
    route.params.item.PatientPhone
  );
  const [patientnic, setPatientnic] = useState(route.params.item.Patientnic);
  const [patientArea, setPatientArea] = useState(route.params.item.PatientArea);
  const Appointments = firebase.firestore().collection("Appointments"); //reference to the "Appointments" collection

  const handleUpdate = () => {
    //validates whether variable is not empty and has a length greater than 0 using a conditional statement
    if (patientTite && patientTite.length > 0) {
      Appointments.doc(route.params.item.key)
        .update({
          PatientTitle: patientTite,
          PatientName: patientName,
          PatientPhone: patientPhone,
          Patientnic: patientnic,
          PatientArea: patientArea,
        })
        .then(() => {
          Alert.alert("Appointment Updated Successfully!"); //alert message
          navigation.navigate("ViewAppointment");
        })
        .catch((e) => alert(e));
    }
  };

  //handle delete function
  const handleDelete = () => {
    Appointments.doc(route.params.item.key)
      .delete()
      .then(() => {
        Alert.alert("Appointment Deleted!");
        navigation.navigate("ViewAppointment");
      })
      .catch((e) => alert(e));
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <AppointmentCard />
        {/* {console.log(route.params.item.key)} */}
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
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button} onPress={handleUpdate}>
            <Text style={styles.buttonText}>UPDATE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleDelete}>
            <Text style={styles.buttonText}>DELETE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default UpdateAppointment;

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
    backgroundColor: "#fff",
    opacity: 0.7,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "97%",
  },
  button: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  scrollView: {
    backgroundColor: "#A9B0E0",
    marginHorizontal: -10,
  },
});
