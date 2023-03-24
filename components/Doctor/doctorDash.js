import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
//import React,{useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import DocAppointmentCard from './DocAppointmentCard';
import DocPatientCheckCard from './DocPatientCheckCard';
import DocAllDetailsCard from './DocAllDetailsCard';
//import { firebase } from '../config'


const DoctorDash = () => {
    const navigation = useNavigation();

    return (
      <View>
        <Image
          style={styles.image}
          source={require("../../assets/docDashPic.jpg")}
        />
        <View style={styles.container}>
          <View>
            <DocAppointmentCard />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("AllAppointment")}
            style={styles.buttonApp}
          >
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>Appoiments</Text>
          </TouchableOpacity>
          <View>
            <DocPatientCheckCard />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("DoctorAdd")}
            style={styles.buttonCheck}
          >
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              Patient Checking
            </Text>
          </TouchableOpacity>
          <View>
            <DocAllDetailsCard />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("DoctorDetails")}
            style={styles.buttonDetails}
          >
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              All Details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

export default DoctorDash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: -20,
    backgroundColor: "",
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
    marginRight: 170,
  },
  buttonCheck: {
    marginTop: -40,
    height: 40,
    width: 150,
    backgroundColor: "#394FD8",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginRight: -170,
  },
  buttonDetails: {
    marginTop: 120,
    height: 20,
    width: 150,
    backgroundColor: "#394FD8",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginRight: -10,
  },
  image: {
    resizeMode: "cover",
    height: 360,
    width: 400,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90,
    marginTop: -30,
  },
  scrollView: {
    backgroundColor: "#fff",
    marginHorizontal: -10,
  },
});