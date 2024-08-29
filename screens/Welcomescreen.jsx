import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'


const Welcomescreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-indigo-600">
     <View className="flex-1 flex justify-around items-center">
      <Text className="text-4xl font-bold text-white">      
         Let's Get Started!
      </Text>
      <View className="flex-row justify-center">
        <Image source={require('../assets/user.png')} style={{width: 350, height: 350}} />
      </View>
      <View className="space-y-4">
      <TouchableOpacity onPress={()=> navigation.navigate('Signup')} className="py-3 bg-yellow-400 px-32 rounded-xl">
      <Text className="text-xl font-bold text-center text-gray-700">Sign up</Text>
      </TouchableOpacity >
      <View className="flex-row justify-center">
        <Text className="text-white font-semibold">Already Have An Account ?
        </Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
          <Text className="text-yellow-400 font-semibold"> Log in</Text>
        </TouchableOpacity>
      </View>
      </View>
     </View>
    </SafeAreaView>
  )
}

export default Welcomescreen