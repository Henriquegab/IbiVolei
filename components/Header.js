import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Cog6ToothIcon } from 'react-native-heroicons/outline'

const Header = () => {
  return (
    
    <View className="flex-row items-center mx-4 space-x-2">
    <Image 
    source={{ uri: 'https://d1fdloi71mui9q.cloudfront.net/WHqB4urTRBKD9xPsZjNF_JZepFm5JgDWe5SOt' }}
    className="h-4 w-10 rounded-full"
    />
    <View className="flex-1">
    
        <Text className="font-bold text-xl text-white">Agenda</Text>
    </View>
    <View className="flex-1">
        <Text className="self-end font-bold text-md text-gray-100">Olá, Henrique</Text>
    </View>
    <TouchableOpacity className="">
        <Cog6ToothIcon color="white" />
    </TouchableOpacity>
</View>
  )
}

export default Header