import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons'

const BtuttonSosmed = ({icon}) => {
  return (
    <View style={tw`p-4 rounded-lg border border-neutral-300  `}>
      <Ionicons name={icon} size={24} color="black" />
    </View>
  )
}

export default BtuttonSosmed