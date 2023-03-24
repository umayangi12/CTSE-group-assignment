import {
    View,
    Text,
    Button,
    StyleSheet,
    Pressable,
    ImageBackground,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { useNavigation } from "@react-navigation/native";
  import { firebase } from "../../config";
  import { FlashList } from "@shopify/flash-list";
  import { BackgroundImage } from "react-native-elements/dist/config";
  
  const AllAppointment = () => {
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
      <BackgroundImage
        style={styles.container}
        source={require("../../assets/appointmentBG.jpeg")}
      >
        <FlashList
          data={appointments}
          numColumns={2}
          estimatedItemSize={100}
          renderItem={({ item }) => (
            <View style={styles.noteView}>
              <Pressable
                onPress={() =>
                  navigation.navigate("DoctorAdd", { item })
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
      </BackgroundImage>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      opacity: 0.8,
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
      fontWeight: 700,
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
  
  export default AllAppointment;
  