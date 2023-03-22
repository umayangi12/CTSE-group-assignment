import { View, Text, Button,StyleSheet,Pressable } from 'react-native'
import React,{useState,useEffect} from 'react'
import {useNavigation} from '@react-navigation/native'
import {firebase} from '../config'
import {FlashList} from '@shopify/flash-list'


const Home = () => {
    const navigation=useNavigation();
    const [books,setBooks]=useState([]);
    const Books=firebase.firestore().collection('Books');

    // useEffect(()=>{
    //     Books
    //     .orderBy('createdAt','desc')
    //     .onSnapshot((querySnapshot)=>{
    //         const books=[];
    //         querySnapshot.forEach((doc)=>{
    //             const {BookName,Author,Price}=doc.data();
    //             books.push({BookName,Author,Price,id:doc.id})
    //         });
    //         setBooks(books);
    //         console.log({...books})
    //     });

    // },[])
    useEffect(()=>{
        const bookSubsc=Books.onSnapshot(querysnapshot=>{
            const books=[];
            querysnapshot.forEach(docSnapshot=>{
                books.push({
                    ...docSnapshot.data(),
                    key: docSnapshot.id
                })
            })
            setBooks(books);
        })
        return()=>bookSubsc();
    },[])




  return (
    <View style={styles.container}>
      <FlashList
      data={books}
      numColumns={2}
      estimatedItemSize={100}
      renderItem={({item})=>(
            <View style={styles.noteView}>
                 <Pressable onPress={()=>navigation.navigate('updateBooks',{item})}>
                <Text style={styles.bookName}>Book name:{item.BookName}</Text>
                <Text style={styles.bookAuthor}>Auther:{item.Author}</Text>
                <Text style={styles.bookPrice}>Price:{item.Price}</Text>
                </Pressable>
            </View>

      )}
      />
      {/* <FlashList
      data={books}
      numColumns={2}
      estimatedItemSize={100}
      renderItem={({item})=>{
        <View style={styles.noteView}>
            <Pressable
            onPress={()=>navigation.navigate('updateBooks',{item})}
            >
                <Text style={styles.bookName}>
                    {item.BookName}
                </Text>
                <Text style={styles.bookAuthor}>
                    {item.Author}
                </Text>
                <Text style={styles.bookAuthor}>
                    {item.Price}
                </Text>
            </Pressable>

        </View>

      }}
      /> */}
      <Button title='Add book' onPress={()=>navigation.navigate('AddBook')}/>
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
        alignItems:'center'
    },
    bookName: {
        fontSize: 16,
    },
    bookAuthor: {
        fontSize: 16,
    },
    bookPrice: {
        fontSize: 16,
    },
})

export default Home