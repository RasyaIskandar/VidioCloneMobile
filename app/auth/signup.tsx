import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonPrimary from '@/components/ButtonPrimary'
import BtuttonSosmed from '@/components/BtuttonSosmed'
import tw from 'twrnc'
import { useRouter } from 'expo-router'

const signup = () => {

  const navigation = useRouter();
  return (
<SafeAreaView>
    <View style={tw`w-100 mx-auto`}>
      <View style={tw`text-center items-center mt-10 w-89 mx-auto`}>
        <Text style={tw`font-bold text-base`}>Create a Vidio Account</Text>
        <Text style={tw`text-center`}>Unlock all free fratures such as content recommendations and add to my list</Text>
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
        <ButtonPrimary title='Sign Up' warnabtn='[#ED205f] ' rute={() => navigation.push('/(tabs)/home')}/>
          <Text style={tw`text-center text-sm mt-3 `}>Or Sign up With</Text>
      </View>
      <View style={tw`flex-row justify-center gap-3 mt-4`}>
        <BtuttonSosmed icon='logo-apple'/>
        <BtuttonSosmed icon='logo-google'/>
        <BtuttonSosmed icon='logo-facebook'/>
      </View>
      <View style={tw`flex-row justify-center gap-3 mt-4`}>
        <Text style={tw`text-base text-gray-700`}>Already have an account?<Text style={tw`text-blue-900 text-base`} onPress={() => navigation.push('/auth/signin')}> Sign In</Text></Text>
      </View>
      <View style={tw`mt-2`}>
        <Text style={tw`text-center text-sm text-gray-700`}>By signin up. you agree t vidio's</Text>
        <Text style={tw`text-center text-sm text-blue-700`}>Terms of srvice and Privacy Policy</Text>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default signup