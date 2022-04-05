import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Modal } from 'react-native';

class ModalComponent extends Component {
    state = { modal: false };

    handleModal = () => {
        this.setState({ modal: this.state.modal ? false : true });
    };
    render() {
        return (
            <View style={styles.container}>
                <Button title="open modal" onPress={this.handleModal}></Button>

                <Modal
                    visible={this.state.modal}
                    animationType={'fade'}
                    // onShow={() => alert('waring')}
                >
                    <View style={{ marginTop: 60, backgroundColor: 'red' }}>
                        <Text>this is modal content</Text>
                    </View>
                    <Button title="go back" onPress={this.handleModal}></Button>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
});

export default ModalComponent;
