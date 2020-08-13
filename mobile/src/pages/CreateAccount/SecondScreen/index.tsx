import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

function SecondScreen(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isHiddenPassword, setIsHiddenPassword] = useState(true);

    const [errorMessage, setErrorMessage] = useState('');

    const { navigate } = useNavigation();

    function handleGoToBackForFirstScreen(){
        navigate('CreateAccount')
    }

    function handleNavigateToRegisterConclusion(){
        if(email !== '' && password !== ''){
            navigate('CreateAccountThird');
        }else{
            setErrorMessage('Favor Preencher Todos os Campos!');
        }
    }

    function handleVisibilityPassword(){
        setIsHiddenPassword(!isHiddenPassword)
    }

    return(
        <KeyboardAvoidingView style={styles.container}>

            <View style={styles.header}>

                <TouchableOpacity onPress={handleGoToBackForFirstScreen}>

                    <AntDesign name="arrowleft" size={24} color="#9C98A6" />

                </TouchableOpacity>

                <View style={styles.containerIndicators}>

                    <View style={styles.inactiveIndicator} />
                    <View style={styles.activeIndicator} />

                </View>

            </View>

            <Text style={styles.emailAndPassword}>02. {' '}Email e Senha</Text>

            <View style={styles.form}>

                    <View style={styles.inputEmailBlock}>

                        <TextInput 
                            style={styles.input} 
                            placeholder="Email" 
                            placeholderTextColor="#9C98A6"
                            onChangeText={textEmail => setEmail(textEmail)}
                        />

                    </View>

                    <View style={styles.inputPasswordBlock}>

                        <TextInput 
                            style={styles.input} 
                            placeholder="Senha" 
                            placeholderTextColor="#9C98A6"
                            onChangeText={textPassword => setPassword(textPassword)} 
                            secureTextEntry={isHiddenPassword}
                        />

                        <TouchableOpacity
                            onPress={handleVisibilityPassword} 
                            style={styles.buttonShowsPassword}>

                            { isHiddenPassword === true 
                            ? <Feather name="eye" size={25} color="#9C98A6" />
                            : <Feather name="eye-off" size={25} color="#8257E5"/> }

                        </TouchableOpacity>

                    </View>
                    
                    <Text style={styles.errorMessage}>{errorMessage}</Text>

                    <TouchableOpacity
                        onPress={handleNavigateToRegisterConclusion} 
                        style={ email !== '' && password !== ''
                        ? styles.activeSubmitButton
                        : styles.inactiveSubmitButton }
                    >

                        <Text 
                            style={ email !== '' && password !== '' 
                            ? styles.activeTextSubmitButton 
                            : styles.inactiveTextSubmitButton }
                        >
                            Próximo
                        </Text>

                    </TouchableOpacity>

                </View>

        </KeyboardAvoidingView>
    )
}

export default SecondScreen;