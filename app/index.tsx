import { View, Text, Image } from 'react-native'
import React from 'react'
import ButtonPrimary from '@/components/ButtonPrimary'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { useRouter } from 'expo-router'

const index = () => {

    const navigation = useRouter();

  return (
    <SafeAreaView>
    <View>
        <Image source={require('@/assets/images/bg-vidio.png')} style={tw`w-80 h-70 mx-auto mt-10`}/>
        <View style={tw`w-90  mx-auto`}>
        <Text style={tw`text-center text-xl font-bold mt-3`}>TV Channels, Soap Operas, Sport & K-Drama, we have it all</Text>
        <Text style={tw`text-center text-sm mt-3`}>Pick anything you like from 40+ TV channels and hundreds of thousands of free content to watch in your free time.</Text>
        </View>
        <View style={tw`w-90 mx-auto mt-50`}>
        <ButtonPrimary title='Sign in Or Register' warnabtn='[#ED205f] ' rute={() => navigation.push('/auth/signin')}/>
        <Text style={tw`text-center text-base mt-3 font-bold`}>Find Content</Text>
        </View>
    </View>
    </SafeAreaView>
  )
}

export default index