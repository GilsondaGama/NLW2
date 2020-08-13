import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
 
import backgroundImage from '../../../assets/images/RegisterConclused/Background.png';
import conclused from '../../../assets/images/RegisterConclused/Conclused.png';

import styles from './styles';


function ThirdScreen(){
    const { navigate } = useNavigation();

    function handleNavigateToLandingPage(){
        navigate('Landing');
    }

    return(
        <>

        <StatusBar style="light" />


        <View style={styles.container}>

            <ImageBackground 
                source={backgroundImage} 
                style={styles.backgroundImage}
                resizeMode="contain"    
            >

                <Image source={conclused} />

                <Text style={styles.registerConclused}>Cadastro {'\n'}concluído!</Text>

                <Text style={styles.info}>Agora você faz parte da {'\n'}plataforma da Proffy</Text>

            </ImageBackground>

            <TouchableOpacity
                onPress={handleNavigateToLandingPage} 
                style={styles.button}
            >
    
                <Text style={styles.textButton}>Entrar</Text>

            </TouchableOpacity>

        </View>

        </>
    )
}

export default ThirdScreen;