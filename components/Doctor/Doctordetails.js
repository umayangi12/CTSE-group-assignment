import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../../config";
import { FlashList } from "@shopify/flash-list";

const DoctorDetails = () => {
  const navigation = useNavigation();
  const [doctor, setDoctor] = useState([]);
  const Doctor = firebase.firestore().collection("Doctor");

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
  useEffect(() => {
    const DoctorSubsc = Doctor.onSnapshot((querysnapshot) => {
      const doctor = [];
      querysnapshot.forEach((docSnapshot) => {
        doctor.push({
          ...docSnapshot.data(),
          key: docSnapshot.id,
        });
      });
      setDoctor(doctor);
    });
    return () => DoctorSubsc();
  }, []);

  return (
    <View style={styles.container}>
      <FlashList
        data={doctor}
        numColumns={2}
        estimatedItemSize={100}
        renderItem={({ item }) => (
          <View style={styles.noteView}>
            <Pressable
              onPress={() => navigation.navigate("DoctorUD", { item })}
            >
              <Text style={styles.paname}>Book name:{item.Paname}</Text>
              <Text style={styles.diagnose}>Auther:{item.Diagnose}</Text>
              <Text style={styles.ddate}>Price:{item.Ddate}</Text>
              <Text style={styles.phone}>Auther:{item.Phone}</Text>
              <Text style={styles.dname}>Price:{item.Dname}</Text>
              <Text style={styles.med1}>Price:{item.Med1}</Text>
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
      <Button
        title="Patient Checking"
        onPress={() => navigation.navigate("DoctorAdd")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c9f5d9",
  },
  noteView: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: "red",
    shadowOffset: { width: 10, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 7,
    alignItems: "center",
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
});

export default DoctorDetails;
