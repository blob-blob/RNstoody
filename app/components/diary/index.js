import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class DiaryComponent extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Text>Diary Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});

export default DiaryComponent;
