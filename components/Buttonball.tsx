import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const Buttonball = ({icon}) => {
  return (
    <View style={tw`p-4 rounded-full bg-white shadow-md`}>
    {icon}
  </View>
  )
}

export default Buttonball