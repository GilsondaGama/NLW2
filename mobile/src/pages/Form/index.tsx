import React, { useState } from 'react';
import { Text, View, ImageBackground, Image, KeyboardAvoidingView, TextInput, CheckBox } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import styles from './styles';

import background from '../../assets/images/Form/Background.png';
import logo from '../../assets/images/Form/logoForm.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Form(){
    const [hiddenPassword, setHiddenPassword] = useState(true);
    const [isSelected, setIsSelected] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const { navigate } = useNavigation();

    function passwordVisibility(){
        setHiddenPassword(!hiddenPassword);
    }

    function handleNavigateToLandingPage(){
        if(email !== '' && password !== '' ){
            navigate('Landing');
        }else{
            setErrorMessage('Favor Preencher os Campos!');
        }
    }

    function handleNavigateToCreateAccountPage(){
        navigate('CreateAccount');
    }

    function handleNavigateToForgotPasswordScreen(){
        navigate('FormRedefinition');
    }

    return(
        <>

        <View style={styles.topContainer}>

            <ImageBackground 
                source={background}
                style={styles.backgroundImage}
                resizeMode="contain"
            >
                
                <Image source={logo} style={styles.logoImage}/>

                <View style={styles.alignSlogan}>

                    <Text style={styles.slogan}>

                        Sua plataforma de {'\n'}
                        estudos online.

                    </Text>

                </View>

            </ImageBackground>
                
        </View>

        <View style={styles.bottomContainer}>

            <KeyboardAvoidingView>

                <View style={styles.header}>

                    <Text style={styles.loginText}>Fazer login</Text>

                    <TouchableOpacity onPress={handleNavigateToCreateAccountPage}>

                        <Text 
                            style={styles.textButtonCreateAccount}>
                                Criar uma conta
                        </Text>

                    </TouchableOpacity>

                </View>

                <View style={styles.containerInput}>

                    <View style={styles.inputEmailGroup}>

                        <TextInput 
                            style={styles.inputEmail} 
                            placeholder="E-mail" 
                            placeholderTextColor="#9C98A6"
                            onChangeText={text => setEmail(text)}
                        />

                        <MaterialCommunityIcons name="email-outline" size={20} color="#9C98A6" />
                        
                    </View>

                    <View style={styles.inputPasswordGroup}>

                        <TextInput 
                            style={styles.inputPassword} 
                            placeholder="Senha"
                            placeholderTextColor="#9C98A6"
                            onChangeText={text => setPassword(text)}
                            secureTextEntry={hiddenPassword}
                        />

                        <TouchableOpacity onPress={passwordVisibility}>

                            {hiddenPassword === true 
                                ? <Feather name="eye" size={20} color="#9C98A6" /> 
                                : <Feather name="eye-off" size={20} color="#8257e5" />
                            }

                        </TouchableOpacity>

                    </View>

                        <Text style={styles.errorMessage}>{errorMessage}</Text>

                </View>

            </KeyboardAvoidingView>

            <View style={styles.footer}>

                <View style={styles.checkboxContainer}>

                    <CheckBox
                        value={isSelected}
                        onValueChange={setIsSelected}
                    />

                    <Text style={styles.checkboxText}>Lembrar-me</Text>      

                </View>

                <TouchableOpacity onPress={handleNavigateToForgotPasswordScreen}>

                    <Text style={styles.forgotMyPassword}>Esqueci minha senha</Text>

                </TouchableOpacity>

            </View>

            <TouchableOpacity
                onPress={handleNavigateToLandingPage} 
                style={email !== '' && password !== ''
                ? styles.activeLogin
                : styles.login}
            >

                <Text 
                    style={email !== '' && password !== ''
                    ? styles.loginActiveTextButton
                    : styles.loginTextButton 
                }
                
                >
                    Entrar
                </Text>

            </TouchableOpacity>

        </View>

        </>
    )
}

export default Form;