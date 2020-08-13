import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from '../pages/Onboarding';
import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import Form from '../pages/Form';
import AccountRoutesFirstScreen from '../pages/CreateAccount/FirstScreen';
import AccountRoutesSecondScreen from '../pages/CreateAccount/SecondScreen';
import AccountRoutesThirdScreen from '../pages/CreateAccount/ThirdScreen';
import FormRedefinition from '../pages/ForgotPassword/FormRedefinition';
import SendRedefinition from '../pages/ForgotPassword/SentRedefinition';

import StudyTabs from './StudyTabs';

const { Navigator, Screen } = createStackNavigator();

function  AppStack(){
    return(
        <NavigationContainer>

            <Navigator screenOptions={{ headerShown: false, }} initialRouteName="Onboarding">

                <Screen name="Onboarding" component={Onboarding} />
                <Screen name="Form" component={Form} />
                <Screen name="Landing" component={Landing} />
                <Screen name="GiveClasses" component={GiveClasses} />
                <Screen name="Study" component={StudyTabs} />
                <Screen name="CreateAccount" component={AccountRoutesFirstScreen} />
                <Screen name="CreateAccountSecond" component={AccountRoutesSecondScreen} />
                <Screen name="CreateAccountThird" component={AccountRoutesThirdScreen} />
                <Screen name="FormRedefinition" component={FormRedefinition} />
                <Screen name="SendRedefinition" component={SendRedefinition} />
                

            </Navigator>

        </NavigationContainer>
    );
}

export default AppStack;