import React, { useState} from 'react';
import { View, ScrollView, Text, TextInput, Picker } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

function TeacherList(){
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');

    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response => {
            if(response){
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.id;
                })

                setFavorites(favoritedTeachersIds);
            }
        })
    }

    useFocusEffect(
        React.useCallback(() => {
          loadFavorites();
        }, [])
      )

    function handleToggleFiltersVisible(){
        setIsFiltersVisible(!isFiltersVisible)
    }

    async function handleFiltersSubmit(){
        loadFavorites();

        try{
            const response = await api.get('classes', {
                params:{
                    subject,
                    week_day,
                    time,
                }
            });
    
            setIsFiltersVisible(false);
            setTeachers(response.data);
        } catch(error){
            console.log(error);
        }
    }

    return(
        <View style={styles.container}>

            <PageHeader  
                title="Proffys Disponíveis" 
                headerRigth={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>

                        <Feather name="filter" size={20} color="#fff" />

                    </BorderlessButton>
                )}
            >

                { isFiltersVisible && (
                
                    <View style={styles.searchForm}>

                        <Text style={styles.label}>Matéria</Text>

                        <View style={styles.inputContainer}>

                            <Picker
                            style={styles.input}
                            selectedValue={subject}
                            onValueChange={(itemValue) => setSubject(itemValue)}
                            >

                                <Picker.Item label="Artes" value="Artes" />
                                <Picker.Item label="Biologia" value="Biologia" />
                                <Picker.Item label="Ciências" value="Ciências" />
                                <Picker.Item label="Educação Física" value="Educação Física" />
                                <Picker.Item label="Física" value="Física" />
                                <Picker.Item label="Geografia" value="Geografia" />
                                <Picker.Item label="História" value="História" />
                                <Picker.Item label="Matemática" value="Matemática" />
                                <Picker.Item label="Português" value="Português" />
                                <Picker.Item label="Química" value="Química" />

                            </Picker>

                        </View>

                        <View style={styles.inputGroup}>

                            <View style={styles.inputBlock}>

                                <Text style={styles.label}>Dia da semana</Text>

                                <View style={styles.inputContainer}>

                                    <Picker
                                    style={styles.input}
                                    selectedValue={week_day}
                                    onValueChange={(itemValue) => setWeek_day(itemValue)}
                                    >

                                        <Picker.Item label="Domingo" value="0" />
                                        <Picker.Item label="Segunda-Feira" value="1" />
                                        <Picker.Item label="Terça-Feira" value="2" />
                                        <Picker.Item label="Quarta-Feira" value="3" />
                                        <Picker.Item label="Quinta-Feira" value="4" />
                                        <Picker.Item label="Sexta-Feira" value="5" />
                                        <Picker.Item label="Sábado" value="6" />

                                    </Picker>

                                </View>

                            </View>

                            <View style={styles.inputBlock}>

                                <Text style={styles.label}>Horário</Text>

                                <View style={styles.inputContainer}>

                                    <Picker
                                    style={styles.input}
                                    selectedValue={time}
                                    onValueChange={(itemValue) => setTime(itemValue)}
                                    >

                                        <Picker.Item label="6:00" value="6:00" />
                                        <Picker.Item label="7:00" value="7:00" />
                                        <Picker.Item label="8:00" value="8:00" />
                                        <Picker.Item label="9:00" value="9:00" />
                                        <Picker.Item label="10:00" value="10:00" />
                                        <Picker.Item label="11:00" value="11:00" />
                                        <Picker.Item label="12:00" value="12:00" />
                                        <Picker.Item label="13:00" value="13:00" />
                                        <Picker.Item label="14:00" value="1400" />
                                        <Picker.Item label="15:00" value="15:00" />
                                        <Picker.Item label="16:00" value="16:00" />
                                        <Picker.Item label="17:00" value="17:00" />
                                        <Picker.Item label="18:00" value="18:00" />
                                        <Picker.Item label="19:00" value="19:00" />
                                        <Picker.Item label="20:00" value="20:00" />
                                        <Picker.Item label="21:00" value="21:00" />

                                    </Picker>

                                </View>

                            </View>

                        </View>

                        <RectButton 
                            style={styles.submitButton}
                            onPress={handleFiltersSubmit}
                        >

                            <Text style={styles.submitButtonText}>Filtrar</Text>

                        </RectButton>

                    </View>
                )}

            </PageHeader>
            
            <ScrollView
              style={styles.teacherList}
              contentContainerStyle={{
                  paddingHorizontal: 16,
                  paddingBottom: 24
              }}  
            >
                {teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem 
                            key={teacher.id} 
                            teacher={teacher}
                            favorited={favorites.includes(teacher.id)}
                        />)
                })}

            </ScrollView>

        </View>
    )
}

export default TeacherList;