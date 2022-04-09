import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Input from '../../utils/forms/input';
class AuthForm extends Component {
    state = {
        type: 'Login',
        action: 'Login',
        actionMode: '새로 등록할게요',
        hasErrors: false,
        form: {
            email: {
                value: '',
                type: 'textInputReviesed',
                rules: {},
                valid: false,
            },
            password: {
                value: '',
                type: 'textInput',
                rules: {},
                valid: false,
            },
            confirmPassword: {
                value: '',
                type: 'textInput',
                rules: {},
                valid: false,
            },
        },
    };

    updateInput = (name, value) => {
        this.setState({
            hasErrors: false,
        });
        let formCopy = this.state.form;
        formCopy[name].value = value;

        this.setState({
            form: formCopy,
        });
    };

    render() {
        return (
            <View>
                <Input
                    value={this.state.form.email.value}
                    type={this.state.form.email.type} //input의 속성은 아님
                    autoCapitalize={'none'}
                    keyboardType={'email-address'}
                    placeholder="이메일 주소"
                    placeholderTextColor="#ddd"
                    onChangeText={value => this.updateInput('email', value)}
                />

                <Input
                    value={this.state.form.password.value}
                    type={this.state.form.password.type} //input의 속성은 아님
                    secureTextEntry={true}
                    placeholder="비밀번호"
                    placeholderTextColor="#ddd"
                    onChangeText={value => this.updateInput('password', value)}
                />
            </View>
        );
    }
}

export default AuthForm;
