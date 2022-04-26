import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens
import SignIn from './components/auth';
import Diary from './components/diary';
import News from './components/news';

import DiaryDocu from './components/diary/diaryDocu';
import Logo from './utils/logo';

const AuthStack = createStackNavigator();
const MainScreenTab = createBottomTabNavigator();
const DiaryStack = createStackNavigator();
const NewsStack = createStackNavigator();

const headerConfig = {
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
    headerStyle: {
        backgroundColor: '#7487C5',
    },
    headerTitle: <Logo />,
    headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
    },
};
/*
    Stack Navigator (로그인 안한 화면)
        - Stack Screen A (auth)

    Stack Navigator (로그인 한 화면)
        - Stack Screen B (diary)
        - Stack Screen C (news)
 */

const isLogggedIn = false;

const DiaryStackComponents = () => {
    return (
        <DiaryStack.Navigator>
            <DiaryStack.Screen
                name="Diary"
                component={Diary}
                options={headerConfig}
            />
            <DiaryStack.Screen
                name="DiaryDocu"
                component={DiaryDocu}
                options={headerConfig}
            />
        </DiaryStack.Navigator>
    );
};

const NewsStackComponents = () => {
    return (
        <NewsStack.Navigator>
            <NewsStack.Screen
                name="News"
                component={News}
                options={headerConfig}
            />
        </NewsStack.Navigator>
    );
};

const AppTabComponent = () => {
    return (
        <MainScreenTab.Navigator>
            <MainScreenTab.Screen
                name="Diary"
                component={DiaryStackComponents}
            />
            <MainScreenTab.Screen name="News" component={NewsStackComponents} />
        </MainScreenTab.Navigator>
    );
};

export const RootNavigator = () => {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            {isLogggedIn ? (
                <AuthStack.Screen name="Main" component={AppTabComponent} />
            ) : (
                <>
                    <AuthStack.Screen name="SignIn" component={SignIn} />
                    <AuthStack.Screen
                        name="AppTabComponent"
                        component={AppTabComponent}
                    />
                </>
            )}
        </AuthStack.Navigator>
    );
};
