import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const AboutUs = () => {
  return (
    <>
    <View styles={{...styles.aboutSection, ...styles.typeWriter}}>
      <Text>  Operated by Digital Health Private Limited is Sri Lanka's pioneering
            digital health solutions service provider, offering medical services
            to subscribers from the convenience of their mobile phone. A
            subsidiary of Sri Lanka's premier connectivity providers with its
            footprint as the digital platform enabler at leading private
            hospitals groups ; Asiri Hospital Holdings PLC, Nawaloka Hospitals
            PLC, Ceylon Hospitals PLC (Durdans), Ninewells Hospital & Lanka
            Hospitals PLC, Digital Health aims to implement and develop a
            state-of-the-art, integrated, e-commerce infrastructure for Sri
            Lanka's healthcare sector.
        </Text>
        <Text>
        The service is open and available to all 22 million plus Sri
            Lankans, and we at Digital Health aim to transform the health care
            service sector and experience for all Sri Lankans and serve as the
            benchmark for integrated e-commerce healthcare solutions in the
            Asia-Pacific region.
        </Text>
    </View>
    </>
  )
}

export default AboutUs

const styles=StyleSheet.create({
    aboutSection:{
        padding:100,
        textAlign:'center',
        backgroundColor:'#e6e6e6',
        color:'black'
    },
    typeWriter:{
        color:'black',
        fontFamily:'calibri',
        overflow:'hidden',
        borderColor:'solid orange',
        margin:0,
        letterSpacing:.15,
    }

})