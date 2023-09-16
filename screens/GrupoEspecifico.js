import { View, Text, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native'
import React, {useLayoutEffect, useEffect, useState} from 'react';
import apiUrl from '../config.js';
import Toast from 'react-native-root-toast';
import axios, { AxiosError } from 'axios';
import { useNavigation, useFocusEffect } from '@react-navigation/native'

const GrupoEspecifico = ({ route }) => {

    const { id } = route.params;

    

    

    const [grupo, setGrupo] = useState([]);

  const [loading, setLoading] = useState(true); // Estado de carregamento


  useEffect(() => {
    setGrupo(null);
  }, [id]);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
  
      try {
        const response = await axios.get(`${apiUrl}/api/grupos/${id}`);
  
        if (response.status === 200) {
          setGrupo(response.data.data);
        }
      } catch (error) {
        console.log(error);
        let toast = Toast.show('Requisição não concluída!', {
          duration: Toast.durations.LONG,
        });
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [id]);




if (loading) {
  // Exibe um indicador de carregamento enquanto espera a resposta da API
  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator size="large" color="orange" />
    </View>
  );
}

  return (
    <ScrollView className="flex-1 bg-white">
      {/* <Text>GrupoEspecifico + {grupo.nome}</Text> */}
      {/* Header */}
      <View className="h-96 items-center bg-ibiLaranja shadow-lg shadow-gray-700/90">
        <View className="w-32 h-32 rounded-full overflow-hidden mt-4 border-white border shadow-lg shadow-gray-700/90">
          <Image className="w-32 h-32" src={grupo.link}></Image>
        </View>
        <TouchableOpacity className="w-20 h-8 rounded-full absolute mt-32 items-center justify-center bg-white shadow-lg shadow-gray-700/90">
          <Text className="font-semibold text-ibiLaranja">Editar</Text>
        </TouchableOpacity>

        <View className="absolute mt-44 w-5/6 h-28 items-center justify-start bg-ibiLaranja rounded-lg border-2 border-white shadow-lg shadow-gray-700/90">
            <Text className="text-white font-semibold text-3xl pb-3">{grupo.nome}</Text>
            <View className="w-full h-12 flex-row">
                <View className="w-1/3 h-full items-center justify-between">
                  <Text className="text-white font-normal text-md">Membros</Text>
                  <Text className="text-white font-semibold text-md">{grupo.membros}</Text>
                </View>
                <View className="w-1/3 h-full items-center justify-between">
                  <Text className="text-white font-normal text-md">Total de jogos</Text>
                  <Text className="text-white font-semibold text-md">{grupo.total_jogos}</Text>
                </View>
                <View className="w-1/3 h-full items-center justify-between">
                  <Text className="text-white font-normal text-md">Criado em</Text>
                  <Text className="text-white font-semibold text-md">{grupo.criado}</Text>
                </View>
            </View>
        </View>
        

      </View>
      
    </ScrollView>
  )
}

export default GrupoEspecifico
