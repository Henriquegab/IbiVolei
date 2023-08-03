import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import React, { useLayoutEffect, useState , useEffect } from 'react'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native'
import SelectDropdown from 'react-native-select-dropdown'
import axios, { AxiosError } from 'axios';
import Toast from 'react-native-root-toast'
import apiUrl from '../config.js';

const countries = ["Unidos do Desespero", "Akira Volei", "Ibi Volei Masculino", "Ibi Volei Feminino", 'Unidos do Volei', 'Vignoli é calvo']

const AgendarQuadra = () => {

  const [loading, setLoading] = useState(true); // Estado de carregamento

  const [grupos, setGrupos] = useState([]);

  useEffect(() => {
    // Faz a solicitação à API para obter os nomes

  
    const fetchData = async () => {

      try{
        //   const token = await AsyncStorage.getItem('token');
        //   if (token) {
              const response = await axios.get(`${apiUrl}/api/grupos`);

              
    
              setGrupos(response.data.data); // Atualiza o estado com os nomes obtidos da API
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


    const navigation = useNavigation();
    const [selectedValue, setSelectedValue] = useState("java");
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
            title: 'Agendar Quadra',
            
            
        
        });
    }, []);

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
        <SafeAreaView className="bg-[#ff5f01]">
                {/* <Header /> */}
            
                
        </SafeAreaView>
        <View className="flex-1  border-red-600 border-solid border-2 justify-center items-start flex-row flex-wrap pt-10">
          <View className="flex  self-center">
            <Text className="font-bold text-lg text-ibiLaranja">
              Grupo:
            </Text>
          </View>
          <View className=" items-center">
          <SelectDropdown
            searchPlaceHolderColor='#ff5f01'
            searchInputTxtColor='#ff5f01'
            defaultButtonText="Selecione o grupo"
            search='1'
            rowTextStyle={{ 
              color:"#ff5f01"
             }}
            selectedRowTextStyle={{ 
              color:"#ff5f01"
             }}
            data={countries}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item
            }}
          />
          </View>
          
        </View>
    </>
    
  )
}

export default AgendarQuadra