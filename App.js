import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';
import Input from './src/input';
class App extends Component {
    state = {
        appName: 'My first app! (header)',
        random: [20, 45, 84, 15, 16],
    };

    onAddRandomNum = () => {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        this.setState(prevState => {
            return {
                random: [...prevState.random, randomNum],
            };
        });
    };

    onNumDelete = position => {
        const newArray = this.state.random.filter((num, index) => {
            return position != index;
        });
        this.setState({
            random: newArray,
        });
    };

    render() {
        return (
            <View style={styles.mainView}>
                {/* <Header name={this.state.appName} />
                <View style={styles.subView}>
                    <Text style={styles.mainText}>hello world</Text>
                </View>
                <Generator add={this.onAddRandomNum} />
                <ScrollView
                    style={{ width: '100%' }}
                    onMomentumScrollBegin={() => alert('begin')}
                    // onMomentumScrollEnd={() => alert('end')}
                    // onScroll={() => alert('scrolling')}
                    // onContentSizeChange={(width, height) => alert(height)}
                >
                    <NumList
                        num={this.state.random}
                        delete={this.onNumDelete}
                    />
                </ScrollView> */}

                <Input />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'fff',
        alignItems: 'center',
        // justifyContent: 'center', // 수직정렬
    },
    subView: {
        backgroundColor: 'yellow',
        marginBottom: 10,
        alignItems: 'center',
    },
    mainText: {
        fontSize: 20,
        fontWeight: 'normal',
        color: 'red',
        padding: 20,
    },
});

export default App;
