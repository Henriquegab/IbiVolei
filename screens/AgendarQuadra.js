import { View, Text, SafeAreaView } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import React, { useLayoutEffect, useState  } from 'react'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native'
import SelectDropdown from 'react-native-select-dropdown'

const countries = ["Egypt", "Canada", "Australia", "Ireland"]

const AgendarQuadra = () => {

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