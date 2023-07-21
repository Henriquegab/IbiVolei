import { View, Text, Image, Pressable, TouchableOpacity, ScrollView, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context';
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon, Cog6ToothIcon } from "react-native-heroicons/outline";
import Calendario from '../components/Calendario.js';
import apiUrl from '../config.js';
import axios, { AxiosError } from 'axios';
import {AsyncStorage} from 'react-native';
import Horario from '../components/Horario.js';


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

  return (
    <>
        <SafeAreaView className="bg-[#ff5f01] pt-2">
            {/* header */}
            <View className="flex-row items-center mx-4 space-x-2">
                <Image 
                source={{ uri: 'https://d1fdloi71mui9q.cloudfront.net/WHqB4urTRBKD9xPsZjNF_JZepFm5JgDWe5SOt' }}
                className="h-4 w-10 rounded-full"
                />
                <View className="flex-1">
                
                    <Text className="font-bold text-xl text-white">Agenda</Text>
                </View>
                <View className="flex-1">
                    <Text className="self-end font-bold text-md text-gray-100">Olá, Henrique</Text>
                </View>
                <TouchableOpacity className="">
                    <Cog6ToothIcon color="white" />
                </TouchableOpacity>
            </View>
            {/* calendário */}
            <Calendario onDiaSelecionado={handleDiaSelecionado} />
            {/* horarios */}
            
        </SafeAreaView>
        
        {agendamentosSemana.length > 0 && diaSelecionado >= 0 && (
          // Renderiza os componentes de horários apenas se houver agendamentos e o dia selecionado for válido
          <ScrollView className="pt-5 px-4 mb-10 pb-5">
            {/* Renderizar os componentes Horario para o dia selecionado */}
            {Object.entries(agendamentosSemana[diaSelecionado]).map(([hora, agendamento]) => (
              <View key={hora} className="flex">
                {agendamento ? (
                  <Horario key={agendamento.id} hora={hora} nome={agendamento.nome} />
                ) : (
                  <Horario key={hora} hora={hora} /> // Passa o componente sem nome caso agendamento seja nulo
                )}
              </View>
            ))}
          </ScrollView>
        )}
        
        
    </>
  )
}



export default HomeScreen