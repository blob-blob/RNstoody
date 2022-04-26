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

class DiaryDocu extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Text>Diary Document</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});

export default DiaryDocu;
