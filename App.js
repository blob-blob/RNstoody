import React, { Component } from 'react';
import { View, Text } from 'react-native';

/**
 * react 모듈에서 Component import.
 * Component class를 app 클래스가 상속받음
 * 화면을 렌더링하는 함수(render)가 있고 함수가 리턴하는 내용
 */
class App extends Component {
    render() {
        return (
            <View>
                <Text>hello world</Text>
            </View>
        );
    }
}

export default App;
