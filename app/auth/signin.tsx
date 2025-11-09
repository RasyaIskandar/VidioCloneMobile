import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BtuttonSosmed from '@/components/BtuttonSosmed'
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import ButtonPrimary from '@/components/ButtonPrimary'

const signin = () => {

      const navigation = useRouter();
  return (
    <SafeAreaView>
    <View style={tw`w-100 mx-auto`}>
      <View style={tw`text-center items-center mt-10`}>
        <Text style={tw`font-bold text-base`}>Sign in to Vidio for free!</Text>
        <Text style={tw`text-center`}>Get comtent recommendations and download your favorite videos to watch everytime</Text>
      </View>
      <View style={tw`flex-row items-center bg-white px-2 py-2 mx-4 mt-6 rounded-xl border border-neutral-300 shadow-md`}>
          <TextInput placeholder="Email" style={tw`ml-2 flex-1 text-gray-700`} />
        </View>
        <View style={tw`flex-row items-center bg-white px-2 py-2 mx-4 mt-6 rounded-xl border border-neutral-300 shadow-md`}>
          <TextInput placeholder="Password" style={tw`ml-2 flex-1 text-gray-700`} />
        </View>
      <View style={tw`flex-row py-3 mx-4 rounded-xl justify-between`}>
        <Text style={tw`text-sm text-gray-700`}>Remember Me</Text>
        <Text style={tw`text-sm text-gray-700`}>Forgot Password?</Text>
      </View>
      <View style={tw`mt-5 w-90 mx-auto`}>
        <ButtonPrimary title='Sign in' warnabtn='[#ED205f] ' rute={() => navigation.push('/(tabs)/home')}/>
          <Text style={tw`text-center text-sm mt-3 `}>Or Sign in With</Text>
      </View>
      <View style={tw`flex-row justify-center gap-3 mt-4`}>
        <BtuttonSosmed icon='logo-apple'/>
        <BtuttonSosmed icon='logo-google'/>
        <BtuttonSosmed icon='logo-facebook'/>
      </View>
      <View style={tw`flex-row justify-center gap-3 mt-4`}>
        <Text style={tw`text-sm text-gray-700`}>Don't have an account?<Text style={tw`text-blue-900`} onPress={() => navigation.push('/auth/signup')}> Sign Up</Text></Text>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default signin