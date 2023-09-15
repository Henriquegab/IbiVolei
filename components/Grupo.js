import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import luis from '../assets/luis.png'
import nicolas from '../assets/nicolas.jpg'
import { useNavigation, useFocusEffect } from '@react-navigation/native'

const Grupo = ({ nome, totalJogos, criado, jogos, membros, imagem, id }) => {

  const navigation = useNavigation();

  let imagem_padrao = 'https://i.pinimg.com/originals/99/27/90/99279086833d4d0662c19f294035630b.jpg';

  let mostrar_imagem = true;

  if(imagem == null){
    mostrar_imagem = false
  }
 

  const ImagemPadrao = () => {
    return (
      <Image className="w-16 h-16 rounded-full" src={imagem_padrao}></Image>
    );
  };

  const ImagemNormal = () => {
    return (
      <Image className="w-16 h-16 rounded-full" src={imagem}></Image>
    );
  };

  const handlePress = (groupId) => {
    navigation.navigate('Grupo Específico', { id: groupId })
  }




  return (
    
      
          <TouchableOpacity className="w-11/12 h-36  rounded-3xl bg-ibiLaranja opacity-80 flex-row flex-wrap shadow-lg shadow-gray-700/90" onPress={() => handlePress(id)}>
            
            
              {/* imagem */}
              <View className="w-16 h-16 rounded-full items-center justify-center pt-4 pl-6">
                  

                    {mostrar_imagem ? <ImagemNormal /> : <ImagemPadrao />}

                  
              </View>
              {/* Quadrado de informações grande */}
              <View className=" w-64 h-32 ml-6 mt-4 justify-between pb-2">
                {/* titulo */}
                <View className="">
                  <Text className="text-white font-bold text-base text-left">{nome ?? '-'}</Text>
                </View>
                {/* Estatísticas */}
                <View className=" h-14 flex-row">
                  {/* Primeiro quadrado pequeno */}
                    <View className=" h-full w-1/3 justify-start space-y-2">
                      <Text className="text-white font-light text-xs text-center">total de jogos</Text>
                      <Text className="text-white font-bold text-xs text-center">{totalJogos ?? '-'}</Text>
                    </View>
                    {/* Segundo quadrado pequeno */}
                    <View className=" h-full w-1/3 justify-start space-y-2">
                      <Text className="text-white font-light text-xs text-center">Criado em</Text>
                      <Text className="text-white font-bold text-xs text-center">{criado ?? "-"}</Text>
                    </View>
                    {/* Terceiro quadrado pequeno */}
                    <View className=" h-full w-1/3 justify-start space-y-2">
                      <Text className="text-white font-light text-xs text-center">Jogos</Text>
                      <Text className="text-white font-bold text-xs text-center">{jogos}</Text>
                    </View>
                </View>
              </View>
              {/* quadrado abaixo da imagem */}
              <View className=" w-16 h-12 ml-4 mt-20 absolute justify-start space-y-2">
                <Text className="text-white font-light text-xs text-center">Membros</Text>
                <Text className="text-white font-bold text-xs text-center">{membros ?? "-"}</Text>
              </View>
              

            
            
            

          </TouchableOpacity>
          
        
    
  )
}

export default Grupo