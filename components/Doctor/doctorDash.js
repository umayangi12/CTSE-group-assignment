import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
//import React,{useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
//import { firebase } from '../config'


const doctorDash = () => {
    const navigation = useNavigation();

    return (
      <View>
        <Image
          style={styles.image}
          source={require("../../assets/doctordash.jpg")}
        />
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.navigate("")}
            style={styles.button}
          >
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>Appoiments</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("DoctorAdd")}
            style={styles.button}
          >
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>
              Patient Checking
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("DoctorDetails")}
            style={styles.button}
          >
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>
              All Details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

export default doctorDash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: ''
    },
    button: {
        marginTop: 50,
        height: 70,
        width: 250,
        backgroundColor: '#026efd',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    image: {
        resizeMode: 'cover',
        height: 200,
        width: 400,
    }

})