import React from 'react';
import { Text, View } from 'react-native';

const WelcomeComponent = () => {
  return (
    <View>
        <Text>Доброе утро, {name}</Text>
    </View>
  );
};

export default WelcomeComponent;
