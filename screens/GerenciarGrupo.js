import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import luis from '../assets/luis.png'
import Grupo from '../components/Grupo'


const GerenciarGrupo = () => {
  return (
    <View className="flex-1">
      <ScrollView>
        <View className="flex items-center pt-4 flex-col space-y-7">
            <View>
              <Grupo />
            </View>
            <View>
              <Grupo />
            </View>
            
        </View>
      </ScrollView>
        
    </View>
  )
}

export default GerenciarGrupo