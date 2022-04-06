import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class AuthComponent extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Text>Auth Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});

export default AuthComponent;
