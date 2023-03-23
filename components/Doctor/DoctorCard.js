import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import IconLabel from "../AppointmentBooking/IconLabel";

const DoctorCard = () => {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.ImageStyle}
        source={require("../../assets/docCard.jpg")}
      />

      <IconLabel />
      <Text style={{marginLeft: 12, fontSize: 12,}}>Check-in solutions for communitu clinics, urgent care and occupational medicine from expertise doctors</Text>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);
const radius = 20;

const styles = StyleSheet.create({
  cardContainer: {
    width: deviceWidth - 50,
    backgroundColor: "#394FD8",
    height: 230,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: radius,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },

  ImageStyle: {
    height: 130,
    width: deviceWidth - 50,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.7,
  },

  currentDateStyle: {
    fontSize: 15,
    fontWeight: "800",
    marginLeft: 10,
    marginTop: 5,
  },
  desStyle: {
    fontWeight: "300",
    marginLeft: 10,
    marginTop: 5,
    fontSize: 12,
    marginHorizontal: 10,
    marginVertical: 5,
  },
});

export default DoctorCard;
