import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { firebase } from '../config'

const Registration = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //validate email and password
  const validate = () => {
    if (!email.includes("@")) {
      setEmailError("Invalid Email");
    } else if (password.length < 4) {
      setPasswordError("Password must be at least 4 characters");
    } else if (email.length === 0) {
      setEmailError("Email is required!");
    } else if (email.indexOf(" ") >= 0) {
      setEmailError("Email cannot contain spaces");
    } else if (password.indexOf(" ") >= 0) {
      setPasswordError("Password cannot contain spaces");
    } else {
      setEmailError("");
      setPasswordError("");
    }
  };

  //user register
  registerUser = async (email, password, firstName, lastName) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase.auth().currentUser.sendEmailVerification({
          handleCodeInApp: true,
          url: 'https://healthcareapp-53d16.firebaseapp.com',
        })
          .then(() => {
            alert('Varification email sent')
          }).catch((error) => {
            alert(error.message)
          })
          .then(() => {
            firebase.firestore().collection('users') //store the user details in the users collection
              .doc(firebase.auth().currentUser.uid)
              .set({
                firstName,
                lastName,
                email,
              })
          })
          .catch((error) => {
            alert(error.message)
          })
      })
      .catch((error => {
        alert(error.message)
      }))
  }


  return (
    <View style={StyleSheet.container}>
      <Text
        style={{
          fontWeight: "700",
          fontSize: 23,
          marginTop: 40,
          marginLeft: 30,
        }}
      >
        Register Here!
      </Text>
      <View style={{ marginTop: 40 }}>
        <TextInput
          style={styles.textInput}
          placeholder="First Name"
          onChangeText={(firstName) => setFirstName(firstName)}
          autoCorrect={false}
        ></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Last Name"
          onChangeText={(lastName) => setLastName(lastName)}
          autoCorrect={false}
        ></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        ></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        ></TextInput>
      </View>
      <TouchableOpacity
        onPress={() =>
          registerUser(email, password, firstName, lastName) && validate()
        }
        style={styles.button}
      >
        <Text style={{ fontWeight: "700", fontSize: 22 }}>Register</Text>
      </TouchableOpacity>
      <View style={styles.error}>
        <Text style={styles.error}>{emailError}</Text>
        {/* <Text style={styles.error}>{passwordError}</Text> */}
      </View>
    </View>
  );


}

export default Registration

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
    backgroundColor: "#C0E8DA",
  },

  textInput: {
    paddingTop: 20,
    paddingBottom: 10,
    width: 400,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginBottom: 10,
    textAlign: "center",
  },

  button: {
    marginTop: 60,
    height: 50,
    width: 320,
    backgroundColor: "#026efd",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginLeft: 35,
  },
  error: {
    color: "#D32F2F",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});