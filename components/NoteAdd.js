import { View, Text,TextInput,TouchableOpacity, Alert } from 'react-native'
import React,{useState} from 'react'
import {firebase} from '../config'
import { Keyboard,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const NoteAdd = () => {

  const navigation=useNavigation();
  const [author,setAuthor]=useState('');
  const [bookName,setBookName]=useState('');
  const [price,setPrice]=useState('');

  const handleAdd=()=>{
    if (!author.trim()) {
      alert('Please Enter Author');
      return;
    }
    if (!bookName.trim()) {
      alert('Please Enter BookName');
      return;
    }
    if (!price.trim()) {
      alert('Please Enter Price');
      return;
    }
    firebase.firestore()
    .collection('Books')
    .add({
      Author:author,
      BookName:bookName,
      Price:price
    })
    .then(()=>{
      setBookName('')
      setAuthor('')
      setPrice('')
      Keyboard.dismiss();
      Alert.alert('Details Added Successfully')
      navigation.navigate('Home')
      
    }).catch((e)=>alert(e))
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Book name'
        value={bookName}
        onChangeText={(e)=>setBookName(e)}
        style={styles.inputTitle}
      />
      <TextInput
        placeholder='Author'
        value={author}
        onChangeText={(e)=>setAuthor(e)}
        style={styles.inputTitle}
      />
      <TextInput
        placeholder='Price'
        value={price}
        onChangeText={(e)=>setPrice(e)}
        style={styles.inputTitle}
      />
      <TouchableOpacity
      style={styles.button}
      onPress={handleAdd}
      >
        <Text style={styles.buttonText}>
          Add
        </Text>

      </TouchableOpacity>
    </View>
  )
}

export default NoteAdd

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:'light-blue'
  },
  inputTitle:{
    fontSize:18,
    fontWeight:'bold',
    marginTop:20,
    marginBottom:10,
    height:50,
    width:'97%',
    borderBottomWidth:1/2,
    borderLeftWidth:1/2,
    padding:10
  },
  buttonText:{
    color:'black',
    fontSize:22,
    fontWeight:'bold'
  }

})