import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './src/header';
class App extends Component {
    state = {
        appName: 'My first app',
    };
    render() {
        return (
            <View style={styles.mainView}>
                <Header name={this.state.appName} />
                <View style={styles.subView}>
                    <Text style={styles.mainText}>hello world</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'fff',
        alignItems: 'center',
        justifyContent: 'center', // 수직정렬
    },
    subView: {
        backgroundColor: 'yellow',
        marginBottom: 10,
        alignItems: 'center',
    },
    mainText: {
        fontSize: 20,
        fontWeight: 'normal',
        color: 'red',
        padding: 20,
    },
});

export default App;
