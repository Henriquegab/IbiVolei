import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import luis from '../assets/luis.png'

const Grupo = () => {
  return (
    
      
          <TouchableOpacity className="w-11/12 h-36  rounded-3xl bg-ibiLaranja opacity-80 flex-row flex-wrap shadow-lg shadow-gray-700/90">
            
            
              {/* imagem */}
              <View className="w-16 h-16 rounded-full items-center justify-center pt-4 pl-6">
                  <Image className="w-16 h-16 rounded-full" source={luis}></Image>
              </View>
              {/* Quadrado de informações grande */}
              <View className=" w-64 h-32 ml-6 mt-4 justify-between pb-2">
                {/* titulo */}
                <View className="">
                  <Text className="text-white font-bold text-base text-left">Unidos do Desespero</Text>
                </View>
                {/* Estatísticas */}
                <View className=" h-14 flex-row">
                  {/* Primeiro quadrado pequeno */}
                    <View className=" h-full w-1/3 justify-start space-y-2">
                      <Text className="text-white font-light text-xs text-center">total de jogos</Text>
                      <Text className="text-white font-bold text-xs text-center">212</Text>
                    </View>
                    {/* Segundo quadrado pequeno */}
                    <View className=" h-full w-1/3 justify-start space-y-2">
                      <Text className="text-white font-light text-xs text-center">Criado em</Text>
                      <Text className="text-white font-bold text-xs text-center">06/09/2023</Text>
                    </View>
                    {/* Terceiro quadrado pequeno */}
                    <View className=" h-full w-1/3 justify-start space-y-2">
                      <Text className="text-white font-light text-xs text-center">Jogos</Text>
                      <Text className="text-white font-bold text-xs text-center">Sexta</Text>
                    </View>
                </View>
              </View>
              {/* quadrado abaixo da imagem */}
              <View className=" w-16 h-12 ml-4 mt-20 absolute justify-start space-y-2">
                <Text className="text-white font-light text-xs text-center">Membros</Text>
                <Text className="text-white font-bold text-xs text-center">67</Text>
              </View>
              

            
            
            

          </TouchableOpacity>
          
        
    
  )
}

export default Grupo