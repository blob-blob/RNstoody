import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens
import SignIn from './components/auth';
import Diary from './components/diary';
import News from './components/news';

const AuthStack = createStackNavigator();
const MainScreenTab = createBottomTabNavigator();

/*
    Stack Navigator (로그인 안한 화면)
        - Stack Screen A (auth)

    Stack Navigator (로그인 한 화면)
        - Stack Screen B (diary)
        - Stack Screen C (news)
 */

const isLogggedIn = false;

const AppTabComponent = () => {
    return (
        <MainScreenTab.Navigator>
            <MainScreenTab.Screen name="Diary" component={Diary} />
            <MainScreenTab.Screen name="News" component={News} />
        </MainScreenTab.Navigator>
    );
};

export const RootNavigator = () => {
    return (
        <AuthStack.Navigator>
            {isLogggedIn ? (
                <AuthStack.Screen name="Main" component={AppTabComponent} />
            ) : (
                <AuthStack.Screen name="SignIn" component={SignIn} />
            )}
        </AuthStack.Navigator>
    );
};
