import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { firebase } from "./config";

import Login from "./src/Login";
import Registration from "./src/Registration";
import Dashboard from "./src/Dashboard";
import AddAppointment from "./components/AppointmentBooking/AddAppointment";
import ViewAppointment from "./components/AppointmentBooking/ViewAppointment";
import UpdateAppointment from "./components/AppointmentBooking/UpdateAppointment";
import BmiCalculator from "./components/BmiCalculator";
import BmrCalculator from "./components/BmrCalculator";
import DoctorDash from "./components/Doctor/doctorDash";
import DoctorAdd from "./components/Doctor/DoctorAdd";
import DoctorDetails from "./components/Doctor/Doctordetails";
import DoctorUD from "./components/Doctor/DoctorUD";
import ContactUs from "./components/LabAppointments/ContactUs"
import Header from "./components/LabAppointments/Header";
import Home from "./components/LabAppointments/Home";
import NoteAdd from "./components/LabAppointments/NoteAdd";
import Detail from "./components//LabAppointments/Detail";
import AppointmentDash from "./components/AppointmentBooking/AppointmentDash";
import AddMedicine from "./components/pharmacy/AddMedicine";
import AllMedicine from "./components/pharmacy/AllMedicine";
import UpdateMedicine from "./components/pharmacy/UpdateMedicine";
import AboutUs from "./components/pharmacy/AboutUs";
import AllAppointment from "./components/Doctor/Allappointment";

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
              height: 170,
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
            headerTitle: () => <Header name="User Register" />,
            headerStyle: {
              height: 170,
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
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            backgroundColor: "#00e4d0",
            shadowColor: "#000",
            elevation: 25,
          },
        }}
      />
      {/* <stack.Screen
        component={Home}
        name="Home"
        options={{
          headerTitle: () => <Header name="Books" />,
          headerStyle: {
            backgroundColor: "#4c00b0",
            height: 150,
          },
        }}
      /> */}
      {/* <stack.Screen
        component={NoteAdd}
        name="AddBook"
        options={{
          headerTitle: () => <Header name="Add book" />,
          headerStyle: {
            backgroundColor: "#4c00b0",
            height: 150,
          },
        }}
      /> */}
      {/* <stack.Screen
        component={Detail}
        name="updateBooks"
        options={{
          headerTitle: () => <Header name="Edit books" />,
          headerStyle: {
            backgroundColor: "#4c00b0",
            height: 150,
          },
        }}
      /> */}

      <stack.Screen
        component={ViewAppointment}
        name="ViewAppointment"
        options={{
          headerTitle: () => <Header name="Appointments" />,
          headerStyle: {
            backgroundColor: "#2A3A7D",
            height: 150,
          },
        }}
      />

      <stack.Screen
        component={AddAppointment}
        name="AddAppointment"
        options={{
          headerTitle: () => <Header name="Place Appointment" />,
          headerStyle: {
            backgroundColor: "#2A3A7D",
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
            backgroundColor: "#2A3A7D",
            height: 150,
          },
        }}
      />
      <stack.Screen
        component={BmiCalculator}
        name="BmiCalculator"
        options={{
          headerTitle: () => <Header name="BMI Calculator" />,
          headerStyle: {
            backgroundColor: "#2A3A7D",
            height: 150,
          },
        }}
      />
      <stack.Screen
        component={BmrCalculator}
        name="BmrCalculator"
        options={{
          headerTitle: () => <Header name="BMR Calculator" />,
          headerStyle: {
            backgroundColor: "#227131",
            height: 150,
          },
        }}
      />
      <stack.Screen
        component={DoctorDash}
        name="DoctorDash"
        options={{
          headerTitle: () => <Header name="Doctor Dashboard" />,
          headerStyle: {
            backgroundColor: "#2A3A7D",
            height: 150,
          },
        }}
      />
      <stack.Screen
        component={AppointmentDash}
        name="AppointmentDash"
        options={{
          headerTitle: () => <Header name="Appointment Dashboard" />,
          headerStyle: {
            backgroundColor: "#2A3A7D",
            height: 150,
      
          },
        }}
      />
      <stack.Screen
        component={DoctorAdd}
        name="DoctorAdd"
        options={{
          headerTitle: () => <Header name="Patient Checking" />,
          headerStyle: {
            backgroundColor: "#2A3A7D",
            height: 150,
          },
        }}
      />
      <stack.Screen
        component={DoctorDetails}
        name="DoctorDetails"
        options={{
          headerTitle: () => <Header name="All Details" />,
          headerStyle: {
            backgroundColor: "#2A3A7D",
            height: 150,
          },
        }}
      />
      <stack.Screen
        component={DoctorUD}
        name="DoctorUD"
        options={{
          headerTitle: () => <Header name="Update Details" />,
          headerStyle: {
            backgroundColor: "#4c00b0",
            height: 150,
          },
        }}
      />
      <stack.Screen
        component={Home}
        name="Home"
        options={{
          headerTitle: () => <Header name="Lab Appointments" />,
          headerStyle: {
            backgroundColor: "#2A3A7D",
            height: 150,
          },
        }}
      />
      <stack.Screen
        component={NoteAdd}
        name="AddBook"
        options={{
          headerTitle: () => <Header name="Add Lab Appointment" />,
          headerStyle: {
            backgroundColor: "#2A3A7D",
            height: 150,
          },
        }}
      />
      <stack.Screen
        component={Detail}
        name="updateBooks"
        options={{
          headerTitle: () => <Header name="Edit Lab Appointment" />,
          headerStyle: {
            backgroundColor: "#2A3A7D",
            height: 150,
          },
        }}
      />
      <stack.Screen
        component={ContactUs}
        name="ContactUs"
        options={{
          headerTitle: () => <Header name="Contact Us" />,
          headerStyle: {
            backgroundColor: "#2A3A7D",
            height: 150,
          },
        }}
      />
        <stack.Screen
          name="aMedicine"
          component={AddMedicine}
          options={{
            headerTitle: () => <Header name="Add medicine" />,
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
          name="medicineAll"
          component={AllMedicine}
          options={{
            headerTitle: () => <Header name="Medicine" />,
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
          name="updateMedicine"
          component={UpdateMedicine}
          options={{
            headerTitle: () => <Header name="Update medicine" />,
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
          name="AboutUs"
          component={AboutUs}
          options={{
            headerTitle: () => <Header name="About Us" />,
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
        component={AllAppointment}
        name="AllAppointment"
        options={{
          headerTitle: () => <Header name="All Appointments" />,
          headerStyle: {
            backgroundColor: "#2A3A7D",
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
