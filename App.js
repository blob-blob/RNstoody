import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
class App extends Component {
    render() {
        return (
            // 화면에 출력하기 위해서는 뷰 컴포넌트로 감싸져있어야 함.
            // 인라인 스타일 or 따로 빼서 하는 스타일
            <View style={styles.background}>
                <View
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                        backgroundColor: 'green',
                        // marginTop: 50,
                        paddingTop: 50,
                    }}>
                    <Text>hello world</Text>
                </View>
                <View
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                        backgroundColor: 'green',
                        marginTop: 50,
                        // paddingTop: 50,
                    }}>
                    <Text>hello world</Text>
                </View>
                <View>
                    <Text>hello world</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'fff',
        alignItems: 'center',
        justifyContent: 'center', // 수직정렬
    },
});

export default App;
