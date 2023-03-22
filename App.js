import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { firebase } from "./config";

import Login from "./src/Login";
import Registration from "./src/Registration";
import Dashboard from "./src/Dashboard";
import Header from "./components/Header";
import Home from './components/Home';
import NoteAdd from './components/NoteAdd';
import Detail from './components/Detail';
import AddAppointment from "./components/AppointmentBooking/AddAppointment";
import ViewAppointment from "./components/AppointmentBooking/ViewAppointment";
import UpdateAppointment from "./components/AppointmentBooking/UpdateAppointment";

const stack = createStackNavigator();

function App() {
  const [initilizing, setInitilizing] = useState(true);
  const [user, setUser] = useState();

  //handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initilizing) setInitilizing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initilizing) return null;

  if(!user) {
    return (
      <stack.Navigator>
        <stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: () => <Header name="User Login" />,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: "#00e4d0",
              shadowColor: "#000",
              elevation: 25,
            },
          }}
        />

        <stack.Screen
          name="Registration"
          component={Registration}
          options={{
            headerTitle: () => <Header name="User Login" />,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: "#00e4d0",
              shadowColor: "#000",
              elevation: 25,
            },
          }}
        />
       
      </stack.Navigator>
    );

  }

  return (
    <stack.Navigator>
      <stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerTitle: () => <Header name="Dashboard" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: "#00e4d0",
            shadowColor: "#000",
            elevation: 25,
          },
        }}
      />
      <stack.Screen
        component={Home}
        name="Home"
        options={{
          headerTitle: () => <Header name="Books" />,
          headerStyle: {
            backgroundColor: "#4c00b0",
            height: 150,
          },
        }}
      />
      <stack.Screen
        component={NoteAdd}
        name="AddBook"
        options={{
          headerTitle: () => <Header name="Add book" />,
          headerStyle: {
            backgroundColor: "#4c00b0",
            height: 150,
          },
        }}
      />
      <stack.Screen
        component={Detail}
        name="updateBooks"
        options={{
          headerTitle: () => <Header name="Edit books" />,
          headerStyle: {
            backgroundColor: "#4c00b0",
            height: 150,
          },
        }}
      />

      <stack.Screen
        component={ViewAppointment}
        name="ViewAppointment"
        options={{
          headerTitle: () => <Header name="Appointments" />,
          headerStyle: {
            backgroundColor: "#4c00b0",
            height: 150,
          },
        }}
      />

      <stack.Screen
        component={AddAppointment}
        name="AddAppointment"
        options={{
          headerTitle: () => <Header name="Add Appointment" />,
          headerStyle: {
            backgroundColor: "#4c00b0",
            height: 150,
          },
        }}
      />

      <stack.Screen
        component={UpdateAppointment}
        name="updateAppointments"
        options={{
          headerTitle: () => <Header name="Edit Appointment" />,
          headerStyle: {
            backgroundColor: "#4c00b0",
            height: 150,
          },
        }}
      />
    </stack.Navigator>
  );

}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}
