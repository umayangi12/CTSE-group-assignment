import { View, Text } from 'react-native'
import React from 'react'

const Header = (props) => {
  return (
    <View style={{margineLeft:15}}>
      <Text style={{fontWeight:'800', fontSize:28}}>
        {props.name}
      </Text>
    </View>
  )
}

export default Header