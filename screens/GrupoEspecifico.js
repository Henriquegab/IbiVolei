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


  useFocusEffect(
    React.useCallback(() => {
      
        

      const fetchData = async () => {

        setLoading(true)
        setGrupo(null);
        alert(id)

        try{
          //   const token = await AsyncStorage.getItem('token');
          //   if (token) {
                const response = await axios.get(`${apiUrl}/api/grupos/${id}`);
    
                if(response.status == 200){
                  setGrupo(response.data.data);
                }
                
      
                 // Atualiza o estado com os nomes obtidos da API
              // }
              
              
          
        }
        catch(error){
            console.log(error)
            let toast = Toast.show('Requisição não concluida!', {
              duration: Toast.durations.LONG,
            });
        }
        finally {
          
          setLoading(false); // Altera o estado de carregamento para false após a resposta da API
        }
        
      }
    
      
        fetchData();

      return () => {
        // Clean up code here
      };
    }, [])
  );




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
      <Text>GrupoEspecifico + {grupo.nome} + {id}</Text>
    </View>
  )
}

export default GrupoEspecifico
