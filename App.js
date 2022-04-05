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
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';
import Input from './src/input';
import PickerComponent from './src/picker';
import Cat from './assets/images/cat1.jpeg';

class App extends Component {
    state = {
        myTextInput: '',
        alphabet: ['a', 'b', 'c', 'd'],
    };
    onChangeInput = event => {
        this.setState({
            myTextInput: event,
        });
    };

    onAddTextInput = () => {
        this.setState(prevState => {
            return {
                myTextInput: '',
                alphabet: [...prevState.alphabet, prevState.myTextInput],
            };
        });
    };

    render() {
        return (
            <View style={styles.mainView}>
                <Image style={styles.image} source={Cat} resizeMode="contain" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'fff',
        alignItems: 'center',
        // justifyContent: 'center', // 수직정렬
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
        margin: 20,
        backgroundColor: 'pink',
    },
    input: {
        width: '100%',
        backgroundColor: 'grey',
        marginTop: 20,
        padding: 10,
    },
    image: {
        width: '100%',
        height: 700,
    },
});

export default App;
