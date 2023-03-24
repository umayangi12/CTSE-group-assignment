import { View, Text, Button, StyleSheet, Pressable,FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../../config";
import { FlashList } from "@shopify/flash-list";


const Home = () => {
  const navigation = useNavigation();
  const [appointments, setAppointments] = useState([]);
  const Appointments = firebase.firestore().collection("labAppointments");
 
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
        numColumns={1}
        estimatedItemSize={100}
        renderItem={({ item }) => (
          <View style={styles.noteView}>
            <Pressable
              onPress={() => navigation.navigate("updateBooks", { item })}
            >
              <Text style={styles.labpatientName}>
                Patient name:{item.labPatientName}
              </Text>
              <Text style={styles.testName}>Test Name: {item.TestName}</Text>
              <Text style={styles.age}>Age: {item.Age}</Text>
            </Pressable>
          </View>
        )}
      />
      <Button
        title="Add Appointment"
        onPress={() => navigation.navigate("AddBook")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  noteView: {
    flex: 1,
    backgroundColor: "#797ef6",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 10, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 8,
    alignItems: "center",
  },
  labpatientName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1e2f97",
  },
  testName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  age: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#d0efff",
  },
 
});

export default Home;
