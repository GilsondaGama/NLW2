import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
 
import backgroundImage from '../../../assets/images/RegisterConclused/Background.png';
import conclused from '../../../assets/images/RegisterConclused/Conclused.png';

import styles from './styles';


function ThirdScreen(){
    const { navigate } = useNavigation();

    function handleNavigationToFormScreen(){
        navigate('Form');
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

                <Text style={styles.sendedRedefinition}>
                    Redefinição {'\n'}
                    enviada!
                </Text>

                <Text style={styles.info}>
                    Boa, agora é só checar o e-mail que foi{'\n'}
                    enviado para você redefinir sua senha{'\n'}
                    e aproveitar os estudos
                </Text>

            </ImageBackground>

            <TouchableOpacity
                onPress={handleNavigationToFormScreen}
                style={styles.button}
            >
    
                <Text style={styles.textButton}>Fazer Login</Text>

            </TouchableOpacity>

        </View>

        </>
    )
}

export default ThirdScreen;