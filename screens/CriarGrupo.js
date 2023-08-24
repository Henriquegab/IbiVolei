import { View, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, {useState} from 'react'
import { TextInput, Switch, Text } from 'react-native-paper';

const CriarGrupo = () => {


    const [text, setText] = useState("");
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };




  return (
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
            </View>
            
        
        </View>
    </TouchableWithoutFeedback>
  )
}

export default CriarGrupo