import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Input from '../../utils/forms/input';
class AuthForm extends Component {
    state = {
        type: 'Register',
        // type: 'Login',
        action: 'Login',
        actionMode: '새로 등록할게요',
        hasErrors: true,
        form: {
            email: {
                value: '',
                type: 'textInput',
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
    confirmPassword = () =>
        this.state.type != 'Login' ? (
            <Input
                value={this.state.form.confirmPassword.value}
                type={this.state.form.confirmPassword.type} //input의 속성은 아님
                secureTextEntry={true}
                placeholder="비밀번호 재입력"
                placeholderTextColor="#ddd"
                onChangeText={value =>
                    this.updateInput('confirmPassword', value)
                }
            />
        ) : null;

    formHasErrors = () =>
        this.state.hasErrors ? (
            <View>
                <Text style={styles.errorContainer}>
                    <Text style={styles.errorLabel}>
                        로그인 정보를 다시 입력해주세요!
                    </Text>
                </Text>
            </View>
        ) : null;

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

                {this.confirmPassword()}

                {this.formHasErrors()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    errorContainer: {
        marginBottom: 10,
        marginTop: 30,
        padding: 15,
        backgroundColor: '#ee3344',
        textAlignVertical: 'center',
        textAlign: 'center',
    },

    errorLabel: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default AuthForm;
