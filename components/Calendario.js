import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Dia from './dia'

const Calendario = () => {
  return (
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ 
          paddingHorizontal: 15,
          paddingTop: 10}}
          className="pt-4 "
        >
            <View className="items-center border-solid border-2 border-black">
                <View className="flex-row justify-between space-x-2 p-3">
                    <Dia />
                    <Dia />
                    <Dia />
                    <Dia />
                    <Dia />
                    <Dia />
                    <Dia />
                </View>
                
            
            </View>
        </ScrollView>
  )
}

export default Calendario