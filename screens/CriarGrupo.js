import { View, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, ActivityIndicator  } from 'react-native'
import React, {useState, useEffect} from 'react'
import { TextInput, Switch, Text, Button, Modal, Portal, HelperText } from 'react-native-paper';
import apiUrl from '../config.js';
import axios, { AxiosError } from 'axios';
import {AsyncStorage} from 'react-native';
import Toast from 'react-native-root-toast'
import querystring from 'querystring';
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker';




const CriarGrupo = () => {



    

    const [loading, setLoading] = useState(false); // Estado de carregamento
    const [text, setText] = useState("");
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const [visible, setVisible] = useState(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};
    const navigation = useNavigation();
    const [image, setImage] = useState(null);

 

    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    

      const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
        
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };
    

    

    // useEffect(() => {
        // Faz a solicitação à API para obter os nomes
  
      
        const handlePost = async () => {
        
            hideModal();

            // setLoading(true)
    
            try{



                const formData = new FormData();
                formData.append('nome', text);
                formData.append('privado', isSwitchOn);
                
                if (image) {
                
                  formData.append('imagem', {
                    uri: image,
                    type: 'image',
                    name: 'imagem.jpg',
                  });
                }

                

                const response = await axios.post(`${apiUrl}/api/grupos`, formData, {
                    headers: {
                      'Content-Type': 'multipart/form-data',
                        },});
                let toast = Toast.show(response.data.message, {
                    duration: Toast.durations.LONG,
                  });
                navigation.navigate('Grupos')
            }
            catch(error){
                console.log(error)
                  let toast = Toast.show(error.response.data.message, {
                    duration: Toast.durations.LONG,
                  });
            }
            finally {
                
                setLoading(false); // Altera o estado de carregamento para false após a resposta da API
            }
        }
  
        
          

          
    //   }, []);

      if (loading) {
        // Exibe um indicador de carregamento enquanto espera a resposta da API
        return (
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" color="orange" />
          </View>
        );
      }

      useFocusEffect(
        React.useCallback(() => {
          // Your code here
          setIsSwitchOn(false)
          setImage(null)
          setText('')
          return () => {
            // Clean up code here
          };
        }, [])
      );




  return (
    <KeyboardAvoidingView
            style={{ flex: 1, justifyContent: 'center' }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View className="flex-1 justify-center">
                <View className="mx-4 h-3/4 rounded-xl space-y-3">
                    
                    <TextInput
                        label="Nome"
                        value={text}
                        onChangeText={text => setText(text)}
                        mode='outlined'
                        outlineColor="#ff5f01"
                        activeOutlineColor="#ff5f01"
                        />

                    {text == "" ? <HelperText type="error">
                    O campo nome é obrigatório!
                    </HelperText> : null}
                    
                    {text.length < 3 ? <HelperText type="error">
                    O campo nome é deve ter mais de 3 letras!
                    </HelperText> : null}

                    


                    <View className="flex-row space-x-4">
                        <Text variant="titleMedium">Grupo privado</Text>
                        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color="#ff5f01" />
                    </View>
                    <View className="items-center">
                        <Button
                            className="w-full h-12 justify-center"
                            icon="image"
                            mode="contained"
                            onPress={pickImage}
                            buttonColor="#ff5f01"
                            >
                            {image ? "OK" : "selecione uma imagem!"}
                        </Button>
                    </View>
                    
                    {/* <ImageViewer
                        placeholderImageSource={PlaceholderImage}
                        selectedImage={image}
                        /> */}
                    <Portal>
                        <Modal  className="px-2" visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                            <Text>Tem certeza que quer criar um grupo com esse nome?</Text>
                            <View className="items-center">
                                <Button className="w-36 h-12 justify-center" icon="content-save-all" mode="contained" onPress={handlePost} buttonColor="#ff5f01">
                                Sim
                                </Button>
                            </View>
                        </Modal>
                    </Portal>
                    <View className="items-center pt-6">
                        <Button className="w-36 h-12 justify-center" icon="content-save-all" mode="contained" onPress={showModal} buttonColor="#ff5f01">
                        Salvar
                        </Button>
                    </View>
                    
                </View>
                
                
            
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default CriarGrupo