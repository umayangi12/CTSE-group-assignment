import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { firebase } from '../../config'
import { Keyboard, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import DatePicker from 'react-native-datepicker';

const DoctorAdd = () => {

    const navigation = useNavigation();
    const [paname, setPaname] = useState('');
    const [diagnose, setDiagnose] = useState('');
    const [ddate, setDdate] = useState('');
    const [phone, setPhone] = useState('');
    const [dname, setDname] = useState('');
    const [med1, setMed1] = useState('');
    //   const [med2,setMed2]=useState('');
    //   const [med3,setMed3]=useState('');
    //   const [med4,setMed4]=useState('');

    const handleAdd = () => {
        if (!paname.trim()) {
            alert('Please Enter Patient Name');
            return;
        }
        if (!diagnose.trim()) {
            alert('Please Enter diagnose');
            return;
        }
        if (!ddate.trim()) {
            alert('Please Enter Date');
            return;
        }
        if (!phone.trim()) {
            alert('Please Enter Phone');
            return;
        }
        if (!dname.trim()) {
            alert('Please Enter Doctor Name');
            return;
        }
        if (!med1.trim()) {
            alert('Please Enter Prescription');
            return;
        }
        firebase.firestore()
            .collection('Doctor')
            .add({
                Paname: paname,
                Diagnose: diagnose,
                Ddate: ddate,
                Phone: phone,
                Dname: dname,
                Med1: med1,
                // Med2:med2,
                // Med3:med3,
                // Med4:med4
            })
            .then(() => {
                setPaname('')
                setDiagnose('')
                setDdate('')
                setPhone('')
                setDname('')
                setMed1('')
                // setMed2('')
                // setMed3('')
                // setMed4('')
                Keyboard.dismiss();
                Alert.alert('Details Added Successfully')
                navigation.navigate('doctorDash')

            }).catch((e) => alert(e))
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Patient Name'
                value={paname}
                onChangeText={(e) => setPaname(e)}
                style={styles.inputTitle}
            />
            <TextInput
                placeholder='Diagnose'
                value={diagnose}
                onChangeText={(e) => setDiagnose(e)}
                style={styles.inputTitle}
            />
            <TextInput
                placeholder='Date'
                value={ddate}
                onChangeText={(e) => setDdate(e)}
                style={styles.inputTitle}
            />
    
            <TextInput
                placeholder='Phone'
                value={phone}
                onChangeText={(e) => setPhone(e)}
                style={styles.inputTitle}
            />
            <TextInput
                placeholder='Doctor Name'
                value={dname}
                onChangeText={(e) => setDname(e)}
                style={styles.inputTitle}
            />
            <TextInput
                placeholder='Prescriptions'
                value={med1}
                onChangeText={(e) => setMed1(e)}
                style={styles.inputTitle}
            />
            {/* <TextInput
        placeholder='Asprin'
        value={price}
        onChangeText={(e)=>setMed2(e)}
        style={styles.inputTitle}
      />
         <TextInput
        placeholder='Ibuproten'
        value={price}
        onChangeText={(e)=>setMed3(e)}
        style={styles.inputTitle}
      />
         <TextInput
        placeholder='Other'
        value={price}
        onChangeText={(e)=>setMed4(e)}
        style={styles.inputTitle}
      /> */}
            <TouchableOpacity
                style={styles.button}
                onPress={handleAdd}
            >
                <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                    Add
                </Text>

            </TouchableOpacity>
        </View>
    )
}

export default DoctorAdd

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'light-blue'
    },
    inputTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        height: 50,
        width: '90%',
        borderWidth: 1,
        borderRadius: 15,
        padding: 10
    },
    buttonText: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold'
    },
    button: {
        marginTop: 30,
        height: 70,
        width: 250,
        backgroundColor: '#026efd',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    // datePickerStyle: {
    //     width: 230,
    //   },

})