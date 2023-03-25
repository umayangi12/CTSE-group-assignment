import { View, Text,TextInput, Alert,Pressable,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import {firebase} from '../../config'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import DropDownPicker from 'react-native-dropdown-picker';

const UpdateMedicine = ({route}) => {
  const navigation=useNavigation();
  const Pharmacy=firebase.firestore().collection('Pharmacy');
  const [medicineName,setMedicineName]=useState(route.params.item.medicineName);
  const [type,setType]=useState(route.params.item.type);
  const [types,setTypes]=useState([
      {label:'syrup',value:'syrup'},
      {label:'Tablet',value:'Tablet'},
      {label:'Inhaler',value:'Inhaler'},
      {label:'Drops',value:'Drops'},
      {label:'Topical',value:'Topical'}
  ])
  const [open,setOpen]=useState(false);
  const [quantity,setQuantity]=useState(route.params.item.quantity);
  const [price,setPrice]=useState(route.params.item.price);
  const [date, setDate] = useState(new Date());
  const [showDate,setShowDate]=useState(false);

  const handleUpdate=()=>{
    if(medicineName && medicineName.length>0){
        Pharmacy.doc(route.params.item.key)
        .update({
          medicineName: medicineName,
          quantity:quantity,
          price: price,
          type:type,
        })
        .then(()=>{
            navigation.navigate('medicineAll')
        })
        .catch((error)=>{
            alert(error)
        })
    }

  }

  //handle delete
  const handleDelete=()=>{
    Pharmacy.doc(route.params.item.key)
    .delete()
    .then(()=>{
        navigation.navigate('medicineAll')
    }).catch((error)=>{
        alert(error)
    })
  }

  return (
    <>
    <View style={styles.container}>
      <TextInput
        placeholder='Medicine name'
        value={medicineName}
        onChangeText={(e)=>setMedicineName(e)}
        style={styles.inputTitle}
      />
     
      <TextInput
        placeholder='Quantity'
        value={quantity}
        onChangeText={(e)=>setQuantity(e)}
        inputMode="numeric"
        keyBoardType="numeric"
        style={styles.inputTitle}
      />
      <TextInput
        placeholder='Price'
        value={price}
        onChangeText={(e)=>setPrice(e)}
        inputMode="numeric"
        keyBoardType="numeric"
        style={styles.inputTitle}
      />
      {/* <Pressable onPress={()=>setShowDate(true)}> */}
        {/* <Text style={{ fontSize: 20, color: '#007AFF' }}>{date?`Exp date is ${date.toLocaleDateString()}`:"Select an expiration date"}</Text> */}
        {/* <DateTimePickerModal
            isVisible={showDate}
            mode="date"
            onConfirm={(date)=>{setDate(date);setShowDate(false)}}
            //onChange={(e)=>{setDate(e);setShowDate(false)}}
            onCancel={(e)=>setShowDate(false)}
        /> */}
      {/* </Pressable> */}

      <View style={styles.dropDownType}>
        <DropDownPicker
        open={open}
        items={types}
        defaultValue={type}
        setOpen={setOpen}
        value={type}
        containerStyle={{ height: 40 }}
        //setValue={setType}
        onSelectItem={(e)=>{setType(e.value);setOpen(false)}}
        />
      </View>

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
    </>
  )
}

export default UpdateMedicine

const styles=StyleSheet.create({
  container:{
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
  buttonView:{
      flexDirection:'row',
      justifyContent:'space-around',
      width:'97%'
  },
  button:{
      backgroundColor:'#000',
      padding:10,
      borderRadius:5,
      marginTop:250
  },
  buttonText:{
      color:'#fff',
      fontSize:18
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