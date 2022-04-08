import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Input from '../../utils/forms/input';
class AuthForm extends Component {
    state = {
        myTextInput: '',
    };

    render() {
        return (
            <View>
                <Input
                    value={this.state.myTextInput}
                    autoCapitalize={'none'}
                    keyboardType={'email-address'}
                    placeholder="이메일 주소"
                    placeholderTextColor="#ddd"
                />

                <Input
                    value={this.state.myTextInput}
                    autoCapitalize={'none'}
                    keyboardType={'email-address'}
                    placeholder="비밀번호"
                    placeholderTextColor="#ddd"
                />

                <Input
                    value={this.state.myTextInput}
                    autoCapitalize={'none'}
                    keyboardType={'email-address'}
                    placeholder="비밀번호 재확인"
                    placeholderTextColor="#ddd"
                />
            </View>
        );
    }
}

export default AuthForm;
