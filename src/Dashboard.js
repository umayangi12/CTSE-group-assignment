import { Text, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions, ImageBackground, View } from 'react-native'
import React, { useEffect, useState} from 'react'
import {firebase}  from '../config'
import {useNavigation} from '@react-navigation/native'
import BmiCard from '../components/BmiCard'
import BmrCard from '../components/BmrCard'


const Dashboard = () => {

  const navigation=useNavigation();
  const [name, setName] = useState('')

  useEffect(() =>{
    firebase.firestore().collection('users')
    .doc(firebase.auth().currentUser.uid).get()
    .then((snapshot) =>{
      if(snapshot.exists){
        setName(snapshot.data())
      }
      else {
        console.log('User does not exist')
      }
    })
  }, [])


  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          style={styles.ImageStyle}
          source={require("../assets/dashboardbg.jpg")}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            justifyContent: "center",
          }}
        >
          Hello, {name.firstName}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            justifyContent: "center",
          }}
        >
          Wishing you good health!
        </Text>
        <TouchableOpacity
          onPress={() => {
            firebase.auth().signOut();
          }}
          style={styles.buttonSignout}
        >
          <Text style={{ fontSize: 12, fontWeight: "700" }}>Sign Out</Text>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 13,
            fontWeight: "700",
            marginLeft: -270,
            marginTop: 20,
            marginBottom: -25,
            color: "#687BF3",
          }}
        >
          Quick Access
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("DoctorDash")}
          style={styles.buttonDoctor}
        >
          <Text style={{ fontSize: 14, fontWeight: "700", color: "#fff" }}>
            Doctor Prescription
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("AppointmentDash")}
          style={styles.buttonPatient}
        >
          <Text style={{ fontSize: 14, fontWeight: "700", color: "#fff" }}>
            Doctor Channeling
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("medicineAll")}
          style={styles.buttonPharmacy}
        >
          <Text style={{ fontSize: 14, fontWeight: "700", color: "#fff" }}>
            Pharmacy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.buttonLab}
        >
          <Text style={{ fontSize: 14, fontWeight: "700", color: "#fff" }}>
            Laboratory
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 13,
            fontWeight: "700",
            marginLeft: -270,
            marginTop: 20,
            marginBottom: -25,
            color: "#687BF3",
          }}
        >
          Calculators
        </Text>
        <View>
          <BmiCard />
        </View>
        <View>
          <BmrCard />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("BmiCalculator")}
          style={styles.buttonBmi}
        >
          <Text style={{ fontSize: 14, fontWeight: "700" }}>
            BMI Calculator
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("BmrCalculator")}
          style={styles.buttonBmr}
        >
          <Text style={{ fontSize: 14, fontWeight: "700" }}>
            BMR Calculator
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 13,
            fontWeight: "700",
            marginLeft: -270,
            marginTop: -50,
            marginBottom: -25,
            color: "#687BF3",
          }}
        >
          Get in touch
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("ContactUs")}
          style={styles.buttonContactUs}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              textDecorationLine: "underline",
            }}
          >
            Contact Us
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("AboutUs")}
          style={styles.buttonAboutUs}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              textDecorationLine: "underline",
            }}
          >
            About Us
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );

}

export default Dashboard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
    backgroundColor: "#fff",
  },
  buttonContactUs: {
    marginTop: 30,
    height: 30,
    width: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginRight: 150,
  },
  buttonAboutUs: {
    marginTop: -30,
    height: 30,
    width: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginRight: -130,
  },
  buttonBmi: {
    marginBottom: 70,
    height: 40,
    width: 100,
    backgroundColor: "#394FD8",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: -50,
    marginLeft: -125,
  },
  buttonBmr: {
    marginBottom: 70,
    height: 40,
    width: 110,
    backgroundColor: "#394FD8",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: -110,
    marginLeft: 145,
  },
  buttonDoctor: {
    marginTop: 30,
    height: 50,
    width: 180,
    backgroundColor: "#647DE0",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginLeft: -180,
  },
  buttonPatient: {
    marginTop: -50,
    height: 50,
    width: 180,
    backgroundColor: "#2A3A7D",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginLeft: 180,
  },
  buttonPharmacy: {
    marginTop: 6,
    height: 50,
    width: 180,
    backgroundColor: "#227131",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginLeft: -180,
  },
  buttonLab: {
    marginTop: -50,
    height: 50,
    width: 180,
    backgroundColor: "#6AD27E",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginLeft: 180,
  },
  buttonSignout: {
    marginTop: 50,
    height: 40,
    width: 90,
    backgroundColor: "#026efd",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginLeft: 250,
  },
  scrollView: {
    backgroundColor: "#fff",
    marginHorizontal: -20,
  },
  ImageStyle: {
    height: 200,
    opacity: 0.7,
    marginLeft: 10,
    marginTop: -45,
    borderRadius: 10,
    width: 400,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    position: "absolute",
  },
  quickText: {
    marginTop: 10,
    marginLeft: 20,
  },
});