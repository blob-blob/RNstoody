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
    // render 함수 밖에 선언.
    state = {
        sampleText: 'hello world',
    };

    render() {
        return (
            <View style={styles.background}>
                <Text>{this.state.sampleText}</Text>
                {/* 여기서 this는 자스문법. 상위스코프를 가리킴 */}
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
