import { View, Text,StyleSheet,TextInput,Button,Pressable } from 'react-native'
import React,{useState,useEffect} from 'react'
import {firebase} from '../../config'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FlashList } from "@shopify/flash-list";

const AllMedicine = () => {
  const navigation=useNavigation();
  const Pharmacy=firebase.firestore().collection('Pharmacy');
  const [pharmacy,setPharmacy]=useState([]);
  useEffect(()=>{
    const pharSubsc=Pharmacy.onSnapshot(querysnapshot=>{
        const phar=[];
        querysnapshot.forEach(docSnapshot=>{
            phar.push({
                ...docSnapshot.data(),
                key: docSnapshot.id
            })
        })
        setPharmacy(phar);
    })
    return()=>pharSubsc();
},[])

  return (
    <View style={styles.container}>
    <FlashList
    data={pharmacy}
    numColumns={1}
    estimatedItemSize={100}
    renderItem={({item})=>(
          <View style={styles.noteView}>
              <Pressable onPress={()=>navigation.navigate('updateMedicine',{item})}>
              <Text style={styles.bookName}>Medicine name:{item.medicineName}</Text>
              <Text style={styles.bookAuthor}>Type of medicine:{item.type}</Text>
              <Text style={styles.bookPrice}>Price:{item.price}</Text>
              <Text style={styles.bookPrice}>Stock:{item.quantity}</Text>
              </Pressable>
          </View>

    )}
    />
    <Button title='Add medicine' onPress={()=>navigation.navigate('aMedicine')}/>
  </View>

  )
}

const styles=StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: '#c9f5d9'
  },
  noteView:{
      flex:1,
      backgroundColor:'#fff',
      margin:10,
      padding:10,
      borderRadius:10,
      shadowColor:'red',
      shadowOffset:{width:10,height:2},
      shadowOpacity:0.8,
      shadowRadius:2,

      elevation:7,
      alignItems:'center',
      opacity:0.8
  },
  bookName: {
      fontSize: 16,
      fontWeight: "bold",
  },
  bookAuthor: {
      fontSize: 16,
      fontWeight: "bold",
  },
  bookPrice: {
      fontSize: 16,
      fontWeight: "bold",
  },
})



export default AllMedicine