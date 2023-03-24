import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const AboutUs = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        style={styles.image}
        source={require("../../assets/aboutUs.jpg")}
      />

      <Text
        styles={{
          fontSize: 13,
          fontWeight: "700",
          marginLeft: -270,
          marginTop: -50,
          marginBottom: -25,
          color: "#687BF3",
        }}
      >
        Operated by Digital Health Private Limited is Sri Lanka's pioneering
        digital health solutions service provider, offering medical services to
        subscribers from the convenience of their mobile phone. A subsidiary of
        Sri Lanka's premier connectivity providers with its footprint as the
        digital platform enabler at leading private hospitals groups ; Asiri
        Hospital Holdings PLC, Nawaloka Hospitals PLC, Ceylon Hospitals PLC
        (Durdans), Ninewells Hospital & Lanka Hospitals PLC, Digital Health aims
        to implement and develop a state-of-the-art, integrated, e-commerce
        infrastructure for Sri Lanka's healthcare sector.
      </Text>
      <Text
        styles={{
          fontSize: 13,
          fontWeight: "700",
          marginLeft: -270,
          marginTop: -50,
          marginBottom: -25,
          color: "#687BF3",
        }}
      >
        The service is open and available to all 22 million plus Sri Lankans,
        and we at Digital Health aim to transform the health care service sector
        and experience for all Sri Lankans and serve as the benchmark for
        integrated e-commerce healthcare solutions in the Asia-Pacific region.
      </Text>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    height: 200,
    width: 350,
    borderRadius: 20,
    marginTop: 30,
    marginBottom: 20,
  },
});
