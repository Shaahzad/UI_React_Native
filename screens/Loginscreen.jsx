import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const Loginscreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white" style={{backgroundColor: '#7b70f3'}}>
      <SafeAreaView className="flex">
      <View className="justify-center flex-row">
        <Image source={require("../assets/education.png")}
        style={{width: 200, height: 200, marginBottom: 5}}
        />
      </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8"
      style={{borderTopLeftRadius: 50, borderTopRightRadius: 30}}
      >
        <View className="form space-y-1">
          <Text className="text-gray-700 ml-4">Email Address</Text>
          <TextInput
          className="bg-gray-100 p-4 rounded-2xl text-gray-700 mb-2"
          placeholder='Enter Your Email'
          value='Shahzad@gmail.com'
          />
          <Text className="text-gray-700 ml-4">Password</Text>
          <TextInput
          secureTextEntry
          className="bg-gray-100 p-4 rounded-2xl text-gray-700"
          placeholder='Enter Your Email'
          value='123456'
          />
          <TouchableOpacity className="flex items-end mb-2">
            <Text className="text-gray-700">Forget Password ?</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-yellow-400 py-3 rounded-xl">
            <Text className="font-bold font-xl text-center text-gray-700">Login</Text>
          </TouchableOpacity>
        </View>
        <Text className="text-center text-gray-700 py-3 text-xl font-bold">
          Or
        </Text>
        <View className="flex-row justify-center space-x-12">
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image source={require("../assets/google.png")} className="w-8 h-8"/>
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image source={require("../assets/facebook.png")} className="w-8 h-8"/>
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image source={require("../assets/apple.png")} className="w-8 h-8"/>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-3">
        <Text className="text-gray-700 font-semibold">Don't have an account ?</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>
          <Text className="text-yellow-500 font-semibold"> Sign Up</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}

export default Loginscreen