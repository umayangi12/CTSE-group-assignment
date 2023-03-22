import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const date = new Date().getDate();
const month = new Date().getMonth();
const year = new Date().getFullYear();

const IconLabel = () => {
    return (
      <View style={styles.container}>
        <Icon
          name="calendar-outline"
          type="ionicon"
          size={14}
          style={styles.iconStyle}
        />
        <Text style={styles.currentDateStyle}>
          Date: {date}/{month}/{year}
        </Text>
        <Icon
          name="alarm-outline"
          type="ionicon"
          size={14}
          style={styles.iconStyle}
        />
        <Text style={styles.currentDateStyle}>Start: 12.00 PM</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 10,
  },
  currentDateStyle: {
    fontSize: 14,
    marginRight: 70,
    marginBottom: 10,
    marginTop: 5,
    fontWeight: '800',
  },

  iconStyle: {
    marginRight: 4,
    marginTop: 6,
    
  },
});

export default IconLabel;