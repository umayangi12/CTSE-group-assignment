import { Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
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


  return(
    <SafeAreaView
    style={styles.container}>
      <Text style={{fontSize: 20, fontWeigh:"bold"}}>
        Hello, {name.firstName}
      </Text>
      <Text style={{fontSize: 20, fontWeigh:"bold"}}>
        Wishing you good health!
      </Text>
      <TouchableOpacity
      onPress={() => {firebase.auth().signOut()}}
      style={styles.button}>
        <Text style={{fontSize: 22, fontWeight: "bold"}}>
          Sign Out
        </Text>
        
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>navigation.navigate('Home')}
      style={styles.button}>
        <Text style={{fontSize: 22, fontWeight: "bold"}}>
          Doctor
        </Text>
        
      </TouchableOpacity>  
      <TouchableOpacity
      onPress={()=>navigation.navigate('ViewAppointment')}
      style={styles.button}>
        <Text style={{fontSize: 22, fontWeight: "bold"}}>
          Patient
        </Text>
        
      </TouchableOpacity>

    </SafeAreaView>
  )

}

export default Dashboard

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 100,
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

})