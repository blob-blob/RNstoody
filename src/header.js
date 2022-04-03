import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

/**
    exampleFunction1 = () => {
    // 리턴되는 jsx컴포넌트가 없음
    }

    exampleFunction2 = () => (
    // 리턴되는 jsx컴포넌트가 있음
    // 태그에 감싸져서 변수에 할당되는 표현식
    )
 */

const Header = props => (
    // eslint-disable-next-line no-alert
    // <TouchableWithoutFeedback onPress={() => alert('hello')}>
    //     <View style={styles.header}>
    //         <Text>{props.name}</Text>
    //     </View>
    // </TouchableWithoutFeedback>

    // <TouchableOpacity style={styles.header} onLongPress={() => alert('hello')}>
    // <TouchableOpacity style={styles.header} onPressIn={() => alert('hello')}> {/* 클릭을 하는 순간 이벤트 발생 */}
    // <TouchableOpacity style={styles.header} onPressOut={() => alert('hello')}> {/* 클릭을 놓는 순간 이벤트 발생 */}
    //     <View>
    //         <Text>{props.name}</Text>
    //     </View>
    // </TouchableOpacity>

    <TouchableOpacity style={styles.header} onPressOut={() => alert('hello')}>
        <View>
            <Text>{props.name}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    header: {
        // flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        padding: 5,
        width: '100%',
    },
});

export default Header;
