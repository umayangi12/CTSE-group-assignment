import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../../config";
import { FlashList } from "@shopify/flash-list";
import { BackgroundImage } from "react-native-elements/dist/config";

const DoctorDetails = () => {
  const navigation = useNavigation();
  const [doctor, setDoctor] = useState([]);
  const Doctor = firebase.firestore().collection("Doctor");

    //set up a subscription to the Appointments collection
  useEffect(() => {
    const DoctorSubsc = Doctor.onSnapshot((querysnapshot) => {
      const doctor = [];
      querysnapshot.forEach((docSnapshot) => {
        doctor.push({
          ...docSnapshot.data(),
          key: docSnapshot.id,
        });
      });
      setDoctor(doctor);
    });
    return () => DoctorSubsc();
  }, []);

  return (
    <BackgroundImage
      style={styles.container}
      source={require("../../assets/DoctorView.jpg")}
    >
      <FlashList
        data={doctor}
        numColumns={1}
        estimatedItemSize={100}
        renderItem={({ item }) => (
          <View style={styles.noteView}>
            <Pressable
              onPress={() => navigation.navigate("DoctorUD", { item })}
            >
              <Text style={styles.paname}>Patient Name: {item.Paname}</Text>
              <Text style={styles.diagnose}>Diagnosis: {item.Diagnose}</Text>
              <Text style={styles.ddate}>Date: {item.Ddate}</Text>
              <Text style={styles.phone}>Phone number: {item.Phone}</Text>
              <Text style={styles.dname}>Doctor Name: {item.Dname}</Text>
              <Text style={styles.med1}>Prescription: {item.Med1}</Text>
            </Pressable>
          </View>
        )}
      />
      <Button
        title="Patient Checking"
        onPress={() => navigation.navigate("DoctorAdd")}
      />
    </BackgroundImage>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    opacity: 0.8,
    resizeMode: "cover",
  },
  noteView: {
    flex: 1,
    backgroundColor: "#7D8CF1",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: "red",
    shadowOffset: { width: 10, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 8,
    alignItems: "center",
  },
  paname: {
    fontSize: 16,
  },
  diagnose: {
    fontSize: 16,
  },
  ddate: {
    fontSize: 16,
  },
  phone: {
    fontSize: 16,
  },
  dname: {
    fontSize: 16,
  },
  med1: {
    fontSize: 16,
  },
});

export default DoctorDetails;
