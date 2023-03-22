import { View, Text,StyleSheet,TextInput } from 'react-native'
import React,{useState} from 'react'
import {firebase} from '../config'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Detail = ({route}) => {
  const navigation=useNavigation();
  const [author,setAuthor]=useState(route.params.item.Author)
  const [bookName,setBookName]=useState(route.params.item.BookName)
  const [price,setPrice]=useState(route.params.item.Price)
  const Books=firebase.firestore().collection('Books');
 
  const handleUpdate=()=>{
    if(bookName && bookName.length>0){
        Books.doc(route.params.item.key)
        .update({
            BookName:bookName,
            Author:author,
            Price:price
        })
        .then(()=>{
            navigation.navigate('Home')
        })
        .catch((error)=>{
            alert(error)
        })
    }

  }

  //handle delete
  const handleDelete=()=>{
    Books.doc(route.params.item.key)
    .delete()
    .then(()=>{
        navigation.navigate('Home')
    }).catch((error)=>{
        alert(error)
    })
  }



  return (
    <View style={styles.container}>
        {console.log(route.params.item.key)}
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
        <View style={styles.buttonView}>
            <TouchableOpacity
            style={styles.button}
            onPress={handleUpdate}
            >
                <Text style={styles.buttonText}>UPDATE</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.button}
            onPress={handleDelete}
            >
                <Text style={styles.buttonText}>DELETE</Text>
            </TouchableOpacity>

        </View>

      
    </View>
  )
}

export default Detail

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#c9f5d9'
    },
    inputTitle:{
        fontSize:18,
        fontWeight:'800',
        marginTop:20,
        marginBottom:10,
        height:50,
        width:'97%',
        borderWidth:1,
        borderRadius:5,
        padding:10
    },
    buttonView:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'97%'
    },
    button:{
        backgroundColor:'#000',
        padding:10,
        borderRadius:5,
        marginTop:10
    },
    buttonText:{
        color:'#fff',
        fontSize:18
    }


})