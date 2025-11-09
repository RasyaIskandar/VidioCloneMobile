import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import BtuttonSosmed from '@/components/BtuttonSosmed'
import Buttonball from '@/components/Buttonball'

const buttonData = [
  { icon: <Entypo name="trophy" size={24} color="black" /> },
  { icon: <FontAwesome name="soccer-ball-o" size={24} color="black" /> },
  { icon: <FontAwesome5 name="crown" size={24} color="black" /> },
  { icon: <FontAwesome name="tv" size={24} color="black" /> },
  { icon: <MaterialCommunityIcons name="movie" size={24} color="black" /> },
  { icon: <FontAwesome5 name="gamepad" size={24} color="black" /> }
]

const carouselImages = [
  require('@/assets/images/bg1.jpg'),
  require('@/assets/images/bg1.jpg'),
  require('@/assets/images/bg1.jpg')
]

const originalsImages = [
  require('@/assets/images/bg2.jpg'),
  require('@/assets/images/bg2.jpg'),
  require('@/assets/images/bg2.jpg')
]

const kidsImages = [
  require('@/assets/images/amba.jpg'),
  require('@/assets/images/amba.jpg'),
  require('@/assets/images/amba.jpg')
]

const home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={tw`mx-4`}>
        <View style={tw`flex-row justify-between`}>
          <Image source={require('@/assets/images/vidio_logo.png')} style={tw`w-40 h-20`}/>

          <View style={tw`flex-row items-center gap-4`}>
            <AntDesign name="search1" size={24} color="black" />
            <AntDesign name="bells" size={24} color="black" />
            <Feather name="list" size={24} color="black" />
          </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={tw`flex-row gap-5`}>
          {carouselImages.map((image, index) => (
            <Image key={index} source={image} style={tw`w-90 rounded-xl`}/>
          ))}
        </View>
      </ScrollView>
      <View style={tw`flex-row justify-center gap-1 mt-4 mx-4`}>
        {buttonData.map((button, index) => (
          <Buttonball key={index} icon={button.icon}/>
        ))}
      </View>

      <View style={tw` mt-4 mx-4`}>
        <Text style={tw`text-lg font-bold`}>Vidio Originals</Text>
        <ScrollView horizontal showsVerticalScrollIndicator={false}>
        <View style={tw`flex-row gap-3 mt-4`}>
          {originalsImages.map((image, index) => (
            <Image key={index} source={image} style={tw`w-40 h-60 rounded-xl`}/>
          ))}
        </View>
        </ScrollView>
      </View>

      <View style={tw` mt-4 mx-4`}>
        <Text style={tw`text-lg font-bold`}>Paling Dicari Anak</Text>
        <ScrollView horizontal showsVerticalScrollIndicator={false}>
        <View style={tw`flex-row gap-3 mt-4`}>
          {kidsImages.map((image, index) => (
            <Image key={index} source={image} style={tw`w-40 h-60 rounded-xl`}/>
          ))}
        </View>
        </ScrollView>
      </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default home