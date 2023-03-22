import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../../config";
import { FlashList } from "@shopify/flash-list";

const ViewAppointment = () => {
  const navigation = useNavigation();
  const [appointments, setAppointments] = useState([]);
  const Appointments = firebase.firestore().collection("Appointments");

  useEffect(() => {
    const appointmentSubsc = Appointments.onSnapshot((querysnapshot) => {
      const appointments = [];
      querysnapshot.forEach((docSnapshot) => {
        appointments.push({
          ...docSnapshot.data(),
          key: docSnapshot.id,
        });
      });
      setAppointments(appointments);
    });
    return () => appointmentSubsc();
  }, []);

  return (
    <View style={styles.container}>
      <FlashList
        data={appointments}
        numColumns={2}
        estimatedItemSize={100}
        renderItem={({ item }) => (
          <View style={styles.noteView}>
            <Pressable
              onPress={() =>
                navigation.navigate("updateAppointments", { item })
              }
            >
              <Text style={styles.patientTite}>Title:{item.PatientTitle}</Text>
              <Text style={styles.patientName}>
                Patient Name:{item.PatientName}
              </Text>
              <Text style={styles.patientPhone}>
                Mobile:{item.PatientPhone}
              </Text>
              <Text style={styles.patientnic}>
                NIC/Passort:{item.Patientnic}
              </Text>
              <Text style={styles.patientArea}>Area:{item.PatientArea}</Text>
            </Pressable>
          </View>
        )}
      />
      <Button
        title="Add Appointment"
        onPress={() => navigation.navigate("AddAppointment")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c9f5d9",
  },
  noteView: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: "blue",
    shadowOffset: { width: 20, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 7,
    alignItems: "center",
  },
  patientTite: {
    fontSize: 16,
  },
  patientName: {
    fontSize: 16,
  },
  patientPhone: {
    fontSize: 16,
  },
  patientnic: {
    fontSize: 16,
  },
  patientArea: {
    fontSize: 16,
  },
});

export default ViewAppointment;
