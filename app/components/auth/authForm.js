import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

class AuthForm extends Component {
    state = {
        myTextInput: '',
    };

    render() {
        return (
            <View>
                <TextInput
                    value={this.state.myTextInput}
                    autoCapitalize={'none'}
                    keyboardType={'email-address'}
                    style={styles.input}
                    placeholder="이메일 주소"
                    placeholderTextColor="#ddd"
                />

                <TextInput
                    value={this.state.myTextInput}
                    autoCapitalize={'none'}
                    keyboardType={'email-address'}
                    style={styles.input}
                    placeholder="비밀번호"
                    placeholderTextColor="#ddd"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        fontSize: 17,
        padding: 5,
        marginTop: 30,
    },
});

export default AuthForm;
