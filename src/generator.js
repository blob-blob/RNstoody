import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Generator = props => {
    return (
        <View style={styles.generator}>
            <Button title="Add number" onPress={() => props.add()}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    generator: {
        backgroundColor: '#77CF28',
        alignItems: 'center',
        padding: 20,
    },
});

export default Generator;
