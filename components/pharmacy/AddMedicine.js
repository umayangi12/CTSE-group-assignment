import { View, Text, TextInput, TouchableOpacity, Alert, Pressable } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../../config'
import { Keyboard, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const AddMedicine = () => {
  const navigation = useNavigation();
  const [medicineName, setMedicineName] = useState('');
  const [type, setType] = useState('');
  const [types, setTypes] = useState([
    { label: 'syrup', value: 'syrup' },
    { label: 'Tablet', value: 'Tablet' },
    { label: 'Inhaler', value: 'Inhaler' },
    { label: 'Drops', value: 'Drops' },
    { label: 'Topical', value: 'Topical' }
  ])
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);

  const handleAdd = () => {
    if (!medicineName.trim()) {
      alert("Please Enter medicine name");
      return;
    }
    if (!quantity.trim()) {
      alert("Please Enter quantative");
      return;
    }
    if (!price.trim()) {
      alert("Please Enter price");
      return;
    }
    if (!type.trim()) {
      alert("Please select a type")
      return;
    }
    // if(!date.trim()){
    //     alert("Please select a date")
    //     return;
    // }
    //let datePass=date
    firebase
      .firestore()
      .collection("Pharmacy")
      .add({
        medicineName: medicineName,
        quantity: quantity,
        price: price,
        type: type,
        //Date:date,
      })
      .then(() => {
        setMedicineName("");
        setQuantity("");
        setPrice("");
        setType("");
        setDate("");
        Keyboard.dismiss();
        Alert.alert("Details Added Successfully");
        navigation.navigate("medicineAll");
      })
      .catch((e) => alert(e));
  };


  return (
    <>
      <View style={styles.container}>
        <TextInput
          placeholder='Medicine name'
          value={medicineName}
          onChangeText={(e) => setMedicineName(e)}
          style={styles.inputTitle}
        />

        <TextInput
          placeholder='Quantity'
          value={quantity}
          onChangeText={(e) => setQuantity(e)}
          inputMode="numeric"
          keyBoardType="numeric"
          style={styles.inputTitle}
        />
        <TextInput
          placeholder='Price'
          value={price}
          onChangeText={(e) => setPrice(e)}
          inputMode="numeric"
          keyBoardType="numeric"
          style={styles.inputTitle}
        />

        <View style={styles.dropDownType}>
          <DropDownPicker
            open={open}
            items={types}
            defaultValue={type}
            setOpen={setOpen}
            value={type}
            containerStyle={{ height: 40 }}
            //setValue={setType}
            onSelectItem={(e) => { setType(e.value); setOpen(false) }}
          />
        </View>
        {/* <Pressable onPress={()=>setShowDate(true)}> */}
        {/* <Text style={{ fontSize: 20, color: '#007AFF' }}>{date?`Exp date is ${date.toLocaleDateString()}`:"Select an expiration date"}</Text> */}
        {/* <DateTimePickerModal
            isVisible={showDate}
            mode="date"
            onConfirm={(date)=>{setDate(date);setShowDate(false)}} */}
        {/* onChange={(e)=>{setDate(e);setShowDate(false)}}
            onCancel={(e)=>setShowDate(false)}
        />
      </Pressable> */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleAdd}
        >
          <Text style={styles.buttonText}>
            Add
          </Text>

        </TouchableOpacity>
      </View>

    </>
  )
}

export default AddMedicine

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#A9B0E0",
  },
  inputTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 10,
    height: 45,
    width: "90%",
    borderBottomWidth: 1 / 2,
    borderLeftWidth: 1 / 2,
    borderRightWidth: 1 / 2,
    borderTopWidth: 1 / 2,
    padding: 10,
    borderRadius: 7,
    borderColor: "black",
    backgroundColor: "#fff",
    opacity: 0.7,
  },
  buttonText: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
  },
  button: {
    marginTop: 250,
    height: 50,
    width: 230,
    marginBottom: 20,
    backgroundColor: "#026efd",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  // datePickerStyle: {
  //     width: 230,
  //   },
  scrollView: {
    backgroundColor: "#A9B0E0",
    marginHorizontal: -10,
  },
  inputTitle1: {
    fontSize: 14,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 10,
    height: 70,
    width: "90%",
    borderBottomWidth: 1 / 2,
    borderLeftWidth: 1 / 2,
    borderRightWidth: 1 / 2,
    borderTopWidth: 1 / 2,
    padding: 10,
    borderRadius: 7,
    borderColor: "black",
    backgroundColor: "#fff",
    opacity: 0.7,
  },
  dropDownType: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 20,
    paddingBottom: 0,
    height: 45,
    width: "93%",
    opacity: 0.7,

  }

})