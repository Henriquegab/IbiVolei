import { View, Text, Image, Pressable, TouchableOpacity, ScrollView, ActivityIndicator, StyleSheet, Platform  } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context';
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon, Cog6ToothIcon, PlusIcon } from "react-native-heroicons/outline";
import Calendario from '../components/Calendario.js';
import apiUrl from '../config.js';
import axios, { AxiosError } from 'axios';
import {AsyncStorage} from 'react-native';
import Horario from '../components/Horario.js';
import Header from '../components/Header.js';
import Toast from 'react-native-root-toast'


const HomeScreen = () => {

    const navigation = useNavigation();

    const [agendamentos, setAgendamentos] = useState([]);

    const [loading, setLoading] = useState(true); // Estado de carregamento

    const [agendamentosSemana, setAgendamentosSemana] = useState([]);

    const [diaSelecionado, setDiaSelecionado] = useState(0);

    

    

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);


    useEffect(() => {
        // Faz a solicitação à API para obter os nomes
  
      
        const fetchData = async () => {
  
          try{
            //   const token = await AsyncStorage.getItem('token');
            //   if (token) {
                  const response = await axios.get(`${apiUrl}/api/agendamento`);

                  
        
                  setAgendamentosSemana(response.data.data); // Atualiza o estado com os nomes obtidos da API
                // }
                // alert(response.data.data);
                
            
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

          
      }, []);

      const handleDiaSelecionado = (index) => {
        // Atualiza o estado com o índice do dia selecionado
        setDiaSelecionado(index);
      };

      if (loading) {
        // Exibe um indicador de carregamento enquanto espera a resposta da API
        return (
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" color="orange" />
          </View>
        );
      }

      const TelaAgendarQuadra = () => {
        navigation.navigate('AgendarQuadra');
      }

      const containerStyle = Platform.OS === 'android' ? 'bg-[#ff5f01] pt-2 pb-5' : 'bg-[#ff5f01] pt-2';

      

  return (
    <>
        <SafeAreaView className={containerStyle}>
            <Header />
            {/* calendário */}
            <Calendario onDiaSelecionado={handleDiaSelecionado} />
            {/* horarios */}
            
        </SafeAreaView>
        
        {agendamentosSemana.length > 0 && diaSelecionado >= 0 && (
          // Renderiza os componentes de horários apenas se houver agendamentos e o dia selecionado for válido
          <View className="flex-1 ">
            <ScrollView className="py-5 px-4 pb-5">
              {/* Renderizar os componentes Horario para o dia selecionado */}
              {Object.entries(agendamentosSemana[diaSelecionado]).map(([hora, agendamento]) => (
                <View key={hora} className="flex">
                  {agendamento ? (
                    <Horario key={agendamento.id} hora={hora} nome={agendamento.nome} />
                  ) : ''}
                </View>
              ))}
            </ScrollView>
            {/* Botão fixo */}
          {/* <TouchableOpacity
            className="bg-white border-solid border-2 border-ibiLaranja"
            style={{
              position: 'absolute',
              bottom: 90,
              right: 30,
              padding: 10,
              borderRadius: 40,
            }}
            onPress={TelaAgendarQuadra}
          >
            <PlusIcon size="40" color="#ff5f01"/>
          </TouchableOpacity> */}
          </View>
        )}
        
        
    </>
  )
}



export default HomeScreen