import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    ScrollView,
    Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './routes';

class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({});

export default App;
