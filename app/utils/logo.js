import React from 'react';
import { Image } from 'react-native';

const LogoTitle = () => {
    return (
        <Image
            source={require('../assets/images/dogs.png')}
            style={{ width: 120, height: 35 }}
            resizeMode="contain"
        />
    );
};

export default LogoTitle;
