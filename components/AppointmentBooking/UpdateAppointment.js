import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { firebase } from "../../config";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Alert } from "react-native";

const UpdateAppointment = ({ route }) => {
  const navigation = useNavigation();
  const [patientTite, setPatientTite] = useState(
    route.params.item.PatientTitle
  );
  const [patientName, setPatientName] = useState(route.params.item.PatientName);
  const [patientPhone, setPatientPhone] = useState(
    route.params.item.PatientPhone
  );
  const [patientnic, setPatientnic] = useState(route.params.item.Patientnic);
  const [patientArea, setPatientArea] = useState(route.params.item.PatientArea);
  const Appointments = firebase.firestore().collection("Appointments");

  const handleUpdate = () => {
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
          Alert.alert("Appointment Updated Successfully!");
          navigation.navigate("ViewAppointment");
        })
        .catch((e) => alert(e));
    }
  };

  //handle delete
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
    <View style={styles.container}>
      {console.log(route.params.item.key)}
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
  );
};

export default UpdateAppointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#c9f5d9",
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
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
