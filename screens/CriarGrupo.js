import { View, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView  } from 'react-native'
import React, {useState} from 'react'
import { TextInput, Switch, Text, Button } from 'react-native-paper';

const CriarGrupo = () => {


    const [text, setText] = useState("");
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    const handlePost = () => {
        
    }




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
                        />


                    <View className="flex-row space-x-4">
                        <Text variant="titleMedium">Grupo privado</Text>
                            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                    </View>
                    <View className="items-center pt-6">
                        <Button className="w-36 h-12 justify-center" icon="content-save-all" mode="contained" onPress={handlePost} buttonColor="#ff5f01">
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