import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const ButtonPrimary = ({title, warnabtn, rute}) => {
  return (
    <TouchableOpacity style={tw`bg-${warnabtn} p-4 py-4 rounded-lg`} onPress={rute}>
        <Text style={tw`text-white text-center font-bold `}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonPrimary