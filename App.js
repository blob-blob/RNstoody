import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    ScrollView,
} from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';
import Input from './src/input';
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
                <TextInput
                    value={this.state.myTextInput}
                    style={styles.input}
                    onChangeText={this.onChangeInput}
                    multiline={true}
                    maxLength={100}
                    autoCapitalize={'none'}
                    editable={true}
                />
                <Button title="ADD text input" onPress={this.onAddTextInput} />
                <ScrollView style={{ width: '100%' }}>
                    {this.state.alphabet.map((item, idx) => (
                        <Text style={styles.mainText} key={idx}>
                            {item}
                        </Text>
                    ))}
                </ScrollView>
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
});

export default App;
