import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * state: 컴포넌트에서 렌더링되는 데이터를 담고 유지관리하는 자바스크립트의 객체
 * state값에 따라 화면에 보여지는 값이 달라지기 때문에 중요
 * state는 class 컴포넌트에서 활용 가능.
 * 함수컴포넌트를 정의했다면 state활용 불가능.
 * const App = () => {};
 */

class App extends Component {
    state = {
        sampleText: 'hello world',
        sampleBoolean: false,
        sampleNum: 1,
    };

    // 화면에 변경된 값을 반영하려면 setState 이용.
    // setState를 이용해서 state를 갱신될때 다시 렌더링. state를 렌더링 데이터를 관리하기 때문에 직접 변경될 수 없어야하는 특성.
    // 비동기

    intputText = () => (this.state.sampleBoolean ? <Text>sampleBoolean is true</Text> : <Text>sampleBoolean is false</Text>);

    changeState = () => {
        if (!this.state.sampleBoolean) {
            this.setState({
                sampleText: 'Text Changed!!!',
                sampleBoolean: true,
            });
        } else {
            this.setState({
                sampleText: 'hello world!!!',
                sampleBoolean: false,
            });
        }
    };

    onAdd = () => {
        /**
        this.setState({
            sampleNum: sampleNum + 1
        }) // 이렇게 하면 에러남.

        현재 버전을 copy하고 update를 하는거라서 안되는 것.
        현재 버전의 값을 넘겨주고, 두번째 콜백함수에서 연산처리 하도록.
    */
        this.setState(prevState => {
            return {
                sampleNum: prevState.sampleNum + 1,
            };
        });
    };
    render() {
        return (
            <View style={styles.background}>
                <Text onPress={this.onAdd}>{this.state.sampleNum}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
