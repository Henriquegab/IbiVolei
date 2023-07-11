import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon, Cog6ToothIcon } from "react-native-heroicons/outline";

const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

  return (
    <SafeAreaView className="bg-[#ff5f01] pt-3">
        {/* header */}
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
    </SafeAreaView>
  )
}

export default HomeScreen