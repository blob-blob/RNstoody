import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class NewsComponent extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Text>News Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});

export default NewsComponent;
