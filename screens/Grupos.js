import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native'
import FormBuilder from 'react-native-paper-form-builder';

import {useForm} from 'react-hook-form';

import {Button} from 'react-native-paper';

import criarGrupo from '../assets/people.png'



const Grupos = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerStyle: {
                backgroundColor: '#ff5f01',

              },
              headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            title: 'Grupos',
            
            
        
        });
    }, []);

    const form = useForm({
      defaultValues: {
        email: '',
  
        password: '',
      },
  
      mode: 'onChange',
    });

    

  return (
    <>
        <SafeAreaView className="bg-[#ff5f01] pt-6">
                
                
                
        </SafeAreaView>
        <ScrollView>
          <View className="flex-1 flex-col px-4 pt-5">
            <View className="flex rounded-xl bg-ibiLaranja my-4 w-auto h-40 justify-center content-center">
              <View className="absolute w-52 h-40 justify-end items-center">
                <Image className="flex-1 w-full h-full" source={criarGrupo}></Image>
              </View>
            
              <TouchableOpacity onPress={() => navigation.navigate('Criar Grupo')} className="flex-1 justify-end items-end pr-3 pb-3">
              
                <Text className="text-white font-bold text-2xl text-center">Criar Grupo</Text>
              </TouchableOpacity>
            </View>
            <View className="flex rounded-xl bg-ibiLaranja my-4 w-auto h-40 justify-center content-center ">
                <View className=" absolute w-52 h-40 justify-end items-center">
                  <Image className="flex-1 w-full h-full" source={criarGrupo}></Image>
                </View>
              <TouchableOpacity onPress={() => navigation.navigate('Gerenciar Grupos')} className="flex-1 justify-end items-end pr-3 pb-3">
                <Text className="text-white font-bold text-2xl text-center">Gerenciar seus Grupos</Text>
              </TouchableOpacity>
            </View>
            <View className="flex rounded-xl bg-ibiLaranja my-4 w-auto h-40 justify-center content-center ">
                <View className=" absolute w-52 h-40 justify-end items-center">
                  <Image className="flex-1 w-full h-full" source={criarGrupo}></Image>
                </View>
              <TouchableOpacity onPress={() => navigation.navigate('Encontrar Grupos')} className="flex-1 justify-end items-end pr-3 pb-3">
                <Text className="text-white font-bold text-2xl text-center">Encontrar Grupos</Text>
              </TouchableOpacity>
            </View>
            
            
          </View>
          
                
                
          
        </ScrollView>
    </>
    
  )
}

export default Grupos