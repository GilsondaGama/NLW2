import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text,  
        KeyboardAvoidingView, 
        View, 
        ImageBackground, 
        Image, 
        TouchableOpacity,
        TextInput
} from 'react-native';

import backgroundImage from '../../../assets/images/Form/Background.png';
import logoImage from '../../../assets/images/Form/logoForm.png';
import slogan from '../../../assets/images/ForgotPassword/slogan.png';

import styles from './styles';


function FormRedefinition(){
    const { navigate } = useNavigation();

    const [email, setEmail] = useState(''); 

    const [errorMessage, setErrorMessage] = useState('');

    function handleGoBackToForm(){
        navigate('Form')
    };

    function handleNavigateToSendRedefinitionScreen(){
        if(email !== ''){
            navigate('SendRedefinition');
        }else{
            setErrorMessage('Favor Preencher o Campo!');
        }
    }

    return(
        <KeyboardAvoidingView style={styles.wrapper}>

            <View style={styles.topContainer}>

                <ImageBackground
                    source={backgroundImage}
                    style={styles.backgroundImage}
                    resizeMode="contain"
                >

                    <Image source={logoImage} />

                    <View style={styles.sloganContainer}>

                        <Image source={slogan} style={styles.slogan}/>

                    </View>

                </ImageBackground>

            </View>

            <View style={styles.bottomContainer}>

                <TouchableOpacity onPress={handleGoBackToForm}>

                    <AntDesign name="arrowleft" size={24} color="#9C98A6" />

                </TouchableOpacity>

                <Text style={styles.forgotYourPassword}>Esqueceu sua senha?</Text>

                <Text style={styles.info}>

                    Não esquenta,{'\n'}
                    vamos dar um jeito nisso.

                </Text>

                <View style={styles.form}>

                    <TextInput 
                        style={styles.input}
                        placeholder="E-mail"
                        placeholderTextColor="#9C98A6"
                        onChangeText={textEmail => setEmail(textEmail)}
                    />

                    <Text style={styles.errorMessage}>{errorMessage}</Text>

                    <TouchableOpacity
                        onPress={handleNavigateToSendRedefinitionScreen}
                        style={ email !== '' 
                        ? styles.activeButton 
                        : styles.inactiveButton }
                    >

                        <Text 
                            style={ email !== '' 
                            ? styles.activeTextButton 
                            : styles.inactiveTextButton }
                        >    
                            Recuperar Senha
                        </Text>

                    </TouchableOpacity>

                </View>

            </View>

        </KeyboardAvoidingView>
    )
}

export default FormRedefinition;