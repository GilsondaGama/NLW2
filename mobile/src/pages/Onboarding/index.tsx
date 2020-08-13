import React from 'react';
import { Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import Background from '../../assets/images/Onboarding/background.png';
import BackgroundTwo from '../../assets/images/Onboarding/BackgroundTwo.png';
import StudyIcon from '../../assets/images/Onboarding/study.png';
import GiveClasses from '../../assets/images/Onboarding/give-classes.png';
import NextIcon from '../../assets/images/Onboarding/back.png';

function Onboarding(){
    const { navigate } = useNavigation();

    function handleNavigateToFormPage(){
        navigate('Form');
    }

    return(
    
        <Swiper 
            loop={false} 
            paginationStyle={{
                justifyContent: 'flex-start',
                marginLeft:30,
                position:'absolute',
                bottom:100,
            }}
            activeDotColor="#32264D"
        >

            <View style={styles.container}>

                <View style={styles.firstTopContainer}>

                    <ImageBackground 
                        source={Background} 
                        style={styles.backgroundImage} 
                        resizeMode="contain"
                    >

                        <Image 
                            source={StudyIcon}
                            style={styles.imageIcon}  
                            resizeMode="contain" 
                        />

                    </ImageBackground>

                </View>

                <View style={styles.bottomContainer}>

                    <Text style={styles.number}>01.</Text>

                    <Text style={styles.phrase}>

                        Encontre vários {'\n'}
                        professores para {'\n'}
                        ensinar você

                    </Text>

                </View>
        
            </View>

            <View style={styles.container}>

                <View style={styles.secondTopContainer}>

                    <ImageBackground 
                        source={BackgroundTwo} 
                        style={styles.backgroundImage} 
                        resizeMode="contain"
                    >

                        <Image 
                            source={GiveClasses}
                            style={styles.imageIcon}  
                            resizeMode="contain" 
                        />

                    </ImageBackground>

                </View>

                <View style={styles.bottomContainer}>

                    <Text style={styles.number}>02.</Text>

                    <Text style={styles.phrase}>

                        Ou dê aulas {'\n'}
                        sobre o que você {'\n'}
                        mais conhece

                    </Text>

                    <TouchableOpacity 
                        style={styles.buttonGoNext}
                        onPress={handleNavigateToFormPage}
                    >

                        <Image source={NextIcon} />

                    </TouchableOpacity>

                </View>
        
            </View>

        </Swiper>

    );
}

export default Onboarding;