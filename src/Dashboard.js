import { Text, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions, ImageBackground, View } from 'react-native'
import React, { useEffect, useState} from 'react'
import {firebase}  from '../config'
import {useNavigation} from '@react-navigation/native'


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
          style={styles.button}
        >
          <Text style={{ fontSize: 22, fontWeight: "700" }}>Sign Out</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.button}
        >
          <Text style={{ fontSize: 22, fontWeight: "700" }}>Doctor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("ViewAppointment")}
          style={styles.button}
        >
          <Text style={{ fontSize: 22, fontWeight: "700" }}>Patient</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("BmiCalculator")}
          style={styles.button}
        >
          <Text style={{ fontSize: 22, fontWeight: "700" }}>
            BMI Calculator
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
  button: {
    marginTop: 50,
    height: 70,
    width: 250,
    backgroundColor: "#026efd",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
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
    position: 'absolute',
  },
});