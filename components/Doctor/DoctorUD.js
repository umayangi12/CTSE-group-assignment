import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { firebase } from '../../config'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const DoctorUD = ({ route }) => {
    const navigation = useNavigation();
    const [paname, setPaname] = useState(route.params.item.Paname)
    const [diagnose, setDiagnose] = useState(route.params.item.Diagnose)
    const [ddate, setDdate] = useState(route.params.item.Ddate)
    const [phone, setPhone] = useState(route.params.item.Phone)
    const [dname, setDname] = useState(route.params.item.Dname)
    const [med1, setMed1] = useState(route.params.item.Med1)
    const Doctor = firebase.firestore().collection('Doctor');

    const handleUpdate = () => {
        if (paname && paname.length > 0) {
            Doctor.doc(route.params.item.key)
                .update({
                    Paname: paname,
                    Diagnose: diagnose,
                    Ddate: ddate,
                    Phone: phone,
                    Dname: dname,
                    Med1: med1,
                })
                .then(() => {
                    navigation.navigate('DoctorDetails')
                })
                .catch((error) => {
                    alert(error)
                })
        }

    }

    //handle delete
    const handleDelete = () => {
        Doctor.doc(route.params.item.key)
            .delete()
            .then(() => {
                navigation.navigate('DoctorDetails')
            }).catch((error) => {
                alert(error)
            })
    }



    return (
        <View style={styles.container}>
            {console.log(route.params.item.key)}
            <TextInput
                placeholder='Patient name'
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
                placeholder='Prescription'
                value={med1}
                onChangeText={(e) => setMed1(e)}
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

export default DoctorUD

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#c9f5d9'
    },
    inputTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        height: 50,
        width: '97%',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '97%'
    },
    button: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 5,
        marginTop: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 18
    }


})