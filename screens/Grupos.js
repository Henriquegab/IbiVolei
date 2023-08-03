import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native'

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

  return (
    <>
        <SafeAreaView className="bg-[#ff5f01] pt-6">
                {/* <Header /> */}
                
                
        </SafeAreaView>
    </>
    
  )
}

export default Grupos