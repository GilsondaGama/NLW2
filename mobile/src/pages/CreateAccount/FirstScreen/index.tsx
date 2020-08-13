import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';


function FirstScreen(){
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const [errorMessage, setErrorMessage] = useState('')

    const { navigate} = useNavigation();

    function handleNavigationToSecondScreen(){
        if(name !== '' && surname !== ''){
            navigate('CreateAccountSecond');
        }else{
            setErrorMessage('Favor Preencher Todos os Campos!');
        }
    }

    function handleNavigationGoToBack(){
        navigate('Form');
    }

    return(
        <>
        <StatusBar style="dark" />

        <KeyboardAvoidingView style={styles.wrapper}>

            <View style={styles.topContainer}>

                <View style={styles.header}>

                    <TouchableOpacity onPress={handleNavigationGoToBack}>

                        <AntDesign name="arrowleft" size={24} color="#9C98A6" />

                    </TouchableOpacity>

                    <View style={styles.containerIndicators}>

                        <View style={styles.activeIndicator} />
                        <View style={styles.inactiveIndicator} />

                    </View>

                </View>

                <Text style={styles.createAccount}>
                    Crie sua {'\n'}
                    conta gratuita 
                </Text>

                <Text style={styles.info}>
                    Basta preencher esses dados {'\n'}
                    e você estará conosco 
                </Text>

            </View>

            <View style={styles.bottomContainer}>

                <Text style={styles.whoAreYou}>01. {' '}Quem é você?</Text>

                <View style={styles.form}>

                    <View style={styles.inputNameBlock}>

                        <TextInput 
                            style={styles.input} 
                            placeholder="Nome" 
                            placeholderTextColor="#9C98A6"
                            onChangeText={textName => setName(textName)} 
                        />

                    </View>

                    <View style={styles.inputSurnameBlock}>

                        <TextInput 
                            style={styles.input} 
                            placeholder="Sobrenome" 
                            placeholderTextColor="#9C98A6"
                            onChangeText={textEmail => setSurname(textEmail)} 
                        />

                    </View>

                    <Text style={styles.errorMessage}>{errorMessage}</Text>

                    <TouchableOpacity 
                        onPress={handleNavigationToSecondScreen}
                        style={ name !== '' && surname !== ''
                        ? styles.activeSubmitButton
                        : styles.inactiveSubmitButton }
                    >

                        <Text 
                            style={ name !== '' && surname !== '' 
                            ? styles.activeTextSubmitButton 
                            : styles.inactiveTextSubmitButton }
                        >
                            Próximo
                        </Text>

                    </TouchableOpacity>

                </View>

            </View>
            
        </KeyboardAvoidingView>

        </>
    )
}

export default FirstScreen;