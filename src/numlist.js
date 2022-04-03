import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const NumList = props => {
    return props.num.map((item, idx) => (
        <View style={styles.numlist} key={idx}>
            <Text>{item}</Text>
        </View>
    ));
};

const styles = StyleSheet.create({
    numlist: {
        backgroundColor: 'grey',
        alignItems: 'center',
        padding: 5,
        marginTop: 5,
    },
});

export default NumList;
