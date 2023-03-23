import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

const AppAllDetailCard = () => {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.ImageStyle}
        source={require("../../assets/alldetailsCard.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 170,
    backgroundColor: "#394FD8",
    height: 140,
    marginTop: -140,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
    marginLeft: 180,
  },

  ImageStyle: {
    height: 100,
    width: 170,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    opacity: 0.8,
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

export default AppAllDetailCard;
