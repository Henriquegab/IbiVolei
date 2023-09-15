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
    <View>
      <Text>GrupoEspecifico + {grupo.nome}</Text>
    </View>
  )
}

export default GrupoEspecifico
