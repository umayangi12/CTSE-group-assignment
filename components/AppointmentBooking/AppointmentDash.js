import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
//import React,{useState,useEffect} from 'react'
import { useNavigation } from "@react-navigation/native";
import AppBookCard from "./AppBookCard";
import AppAllDetailCard from "./AppAllDetailsCard";

const AppointmentDash = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Image
        style={styles.image}
        source={require("../../assets/appDash.jpg")} //dashboard image 
      />
      <View style={styles.container}>
        <View>
          {/* appointment booking card */}
          <AppBookCard /> 
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("AddAppointment")}
          style={styles.buttonApp}
        >
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>Booking</Text>
        </TouchableOpacity>
        <View>
          {/* appointment booking details card */}
            <AppAllDetailCard/>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("ViewAppointment")} //navigating to the view appointment screen
          style={styles.buttonDetails}
        >
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>All Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppointmentDash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#B2BBF9",
  },
  button: {
    marginTop: 50,
    height: 70,
    width: 250,
    backgroundColor: "#026efd",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  buttonApp: {
    marginTop: 130,
    height: 40,
    width: 100,
    backgroundColor: "#394FD8",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginRight: 180,
  },
  buttonDetails: {
    marginTop: -40,
    height: 40,
    width: 150,
    backgroundColor: "#394FD8",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginRight: -180,
  },
  image: {
    resizeMode: "cover",
    height: 360,
    width: 400,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90,
    marginTop: -30,
  },
});
