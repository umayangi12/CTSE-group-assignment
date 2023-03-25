import { View, Text,StyleSheet } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import { Marker, Callout } from "react-native-maps";
const ContactUs = () => {
  return (
    <View style={styles.container}>

      <Text style={[styles.header]}>Hospitals Address</Text>
      <Text style={styles.lightText}>
        No. 578, Elvitigala Mawatha, Narahenpita, Colombo 05, Sri Lanka
      </Text>
      <Text style={styles.header}>
        Hospitals Administration Office Address
      </Text>
      <Text style={styles.lightText}>
        No. 578, Elvitigala Mawatha, Narahenpita, Colombo 05, Sri Lanka
      </Text>
      <Text style={styles.header}>Directions to our hospitals</Text>
      <Text style={styles.paraText}>
        Hospitals is located between Park Road and Kirula Mawatha on the
        Baseline Road, which is also known as Elvitigala Mawatha.
      </Text>
      <Text style={styles.lightText}>
        Emergency Hotline - 1566 / 011 553 0000
      </Text>
      <Text style={styles.lightText}>General Line - 011 543 0000</Text>
      <Text style={styles.lightText}>Email -info@abchospitals.com</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 6.89028923164236,
          longitude: 79.87540909718666,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 6.89028923164236,
            longitude: 79.87540909718666,
          }}
        >
          <Callout>
            <Text>I'm here</Text>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  lightText: {
    margin: 5,
    fontSize: 12,
    fontStyle: "italic",
    color: "blue",
  },
  paraText: {
    margin: 5,
    fontSize: 14,
    color: "black",
  },
  header: {
    margin: 5,
    fontSize: 18,
    fontWeight: "bold",
  },

});

export default ContactUs;
