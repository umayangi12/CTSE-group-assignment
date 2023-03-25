import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../config";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  //validate error message
  const validate = () => {
    if(!email.includes('@')) {
      setEmailError('Invalid Email');
    } else if (password.length < 4) {
      setPasswordError('Password must be at least 4 characters')
    } else if (email.length === 0) {
      setEmailError('Email is required!')
    } else if(email.indexOf(' ') >= 0) {
      setEmailError('Email cannot contain spaces')
    } else if(password.indexOf(' ') >= 0) {
      setPasswordError('Password cannot contain spaces')
    } else {
      setEmailError('');
      setPasswordError('');
    }
  }

  loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    
    } catch (error) {
      alert(error.message);
    }
  
  };

  const forgetPassword = () =>{
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      alert("Password reset email sent")
    }).catch((error) => {
      alert(error)
    })
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "700", fontSize: 26, marginTop: 140 }}>
        Login
      </Text>
      <View style={{ marginTop: 40 }}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        onPress={() => loginUser(email, password) && validate()}
        style={styles.button}
      >
        <Text style={{ fontWeight: "700", fontSize: 22 }}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.error}>{emailError}</Text>
      {/* <Text style={styles.error}>{passwordError}</Text> */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Registration")}
        style={{ marginTop: 20 }}
      >
        <Text style={{ fontWeight: "700", fontSize: 16 }}>
          Don't have an account? Register now
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          forgetPassword();
        }}
        style={{ marginTop: 20 }}
      >
        <Text style={{ fontWeight: "700", fontSize: 16 }}>
          Forget Passowrd?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: -40,
    backgroundColor: "#fff",
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
  },
  error: {
    color: 'red'

  }
});
