import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Horario = ({hora, nome}) => {
  return (
    <>
        <View className="flex flex-wrap flex-row rounded-full bg-ibiLaranja my-4">
            <View className="border-solid border-r-2 border-r-white flex w-2/5 h-14 items-center justify-center">
                <Text className="text-xl text-white font-bold">{hora}</Text>
            </View>
            <TouchableOpacity className="flex w-3/5 justify-center items-center">
                {nome ? (
                <Text className="text-sm text-white font-bold">{nome}</Text>
                ) : (
                <Text className="text-sm text-white font-bold"></Text>
                )}
            </TouchableOpacity>
        </View>
    </>
  )
}

export default Horario