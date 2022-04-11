import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    Platform,
} from 'react-native';
import Input from '../../utils/forms/input';
import ValidationRules from '../../utils/forms/validationRules';

import { connect } from 'react-redux';
import { signIn, signUp } from '../../store/actions/user_actions';
import { bindActionCreators } from 'redux';

class AuthForm extends Component {
    state = {
        // type: 'Register', // 로그인 / 등록
        type: '로그인', // 로그인 / 등록
        action: '로그인', // 회원가입 / 로그인
        actionMode: '회원가입', // 회원가입 / 로그인
        hasErrors: false,
        form: {
            email: {
                value: '',
                type: 'textInput',
                rules: {
                    isRequired: true,
                    isEmail: true,
                },
                valid: false,
            },
            password: {
                value: '',
                type: 'textInput',
                rules: {
                    isRequired: true,
                    minLength: 6,
                },
                valid: false,
            },
            confirmPassword: {
                value: '',
                type: 'textInput',
                rules: {
                    confirmPassword: 'password',
                },
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

        // rules
        let rules = formCopy[name].rules;
        let valid = ValidationRules(value, rules, formCopy);
        formCopy[name].valid = valid;

        this.setState({
            form: formCopy,
        });
    };
    confirmPassword = () =>
        this.state.type != '로그인' ? (
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

    changeForm = () => {
        const type = this.state.type;

        this.setState({
            type: type === '로그인' ? '등록' : '로그인',
            action: type === '로그인' ? '등록' : '로그인',
            actionMode: type === '로그인' ? '로그인 화면으로' : '회원가입',
        });
    };

    submitUser = () => {
        // init.
        let isFormValid = true;
        let submittedForm = {};
        const formCopy = this.state.form;

        for (let key in formCopy) {
            if (this.state.type === '로그인') {
                if (key !== 'confirmPassword') {
                    isFormValid = isFormValid && formCopy[key].valid;
                    submittedForm[key] = formCopy[key].value;
                }
            } else {
                isFormValid = isFormValid && formCopy[key].valid;
                submittedForm[key] = formCopy[key].value;
            }
        }
        if (isFormValid) {
            if (this.state.type === '로그인') {
                this.props.signIn(submittedForm);
            } else {
                this.props.signUp(submittedForm);
            }
        } else {
            this.setState({
                hasErrors: true,
            });
        }
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

                {this.confirmPassword()}

                {this.formHasErrors()}

                <View style={{ marginTop: 40 }}>
                    <View style={styles.button}>
                        <Button
                            title={this.state.action}
                            color="#48567f"
                            onPress={this.submitUser}
                        />
                    </View>

                    <View style={styles.button}>
                        <Button
                            title={this.state.actionMode}
                            color="#48567f"
                            onPress={() => this.changeForm()}
                        />
                    </View>

                    <View style={styles.button}>
                        <Button
                            title="비회원 로그인"
                            color="#48567f"
                            onPress={() => this.props.goWithoutLogin()}
                        />
                    </View>
                </View>
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
    button: {
        ...Platform.select({
            ios: {
                marginTop: 10,
            },
            android: {
                marginTop: 10,
                marginBottom: 15,
            },
        }),
    },
});

function mapStateToProps(state) {
    return {
        User: state.User,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ signIn, signUp }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
