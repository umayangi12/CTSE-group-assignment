import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import IconLabel from "./IconLabel";

const AppointmentCard = () => {
    return (
      <View style={styles.cardContainer}>
        <Image
          style={styles.ImageStyle}
          source={require("../../assets/appointmentCardImage.jpg")}
        />
    
        <IconLabel/>
        <Text style={styles.desStyle}>
          Your estimated appointment time is 12.00 PM. This time is depending on
          the time spend with patients ahead of you.
        </Text>
      </View>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
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


export default AppointmentCard;