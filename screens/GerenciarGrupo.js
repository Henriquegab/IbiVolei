import { View, Text, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native'
import React, {useLayoutEffect, useEffect, useState} from 'react'
import luis from '../assets/luis.png'
import udd from '../assets/udd.jpg'
import Grupo from '../components/Grupo'
import apiUrl from '../config.js';
import axios, { AxiosError } from 'axios';
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import Toast from 'react-native-root-toast'




const GerenciarGrupo = () => {

  const navigation = useNavigation();

  const [grupos, setGrupos] = useState([]);

  const [loading, setLoading] = useState(true); // Estado de carregamento





  useFocusEffect(
    React.useCallback(() => {
      


      const fetchData = async () => {

        setLoading(true)

        try{
          //   const token = await AsyncStorage.getItem('token');
          //   if (token) {
                const response = await axios.get(`${apiUrl}/api/usuario_grupos/1`);
    
                if(response.status == 200){
                  setGrupos(response.data.data);
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
    <View className="flex-1">
      <ScrollView>
        <View className="flex items-center pt-4 flex-col space-y-7">
            
          {grupos?.map((el) => {

              
              
               return (
                <View className="space-y-4">
                  <Grupo key={el.id} nome={el.nome} totalJogos={el.total_jogos} criado={el.criado} jogos="Sexta" membros={el.membros} imagem={el.link} />
                </View>
               ) 
               
               
                
              
          })}
          
          
            
        </View>
      </ScrollView>
        
    </View>
  )
}

export default GerenciarGrupo