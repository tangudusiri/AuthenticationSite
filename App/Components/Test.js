import React from 'react';
import { Text, View } from 'react-native';
const Test = () => {
    return (
        <View testID='hello'
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
            <Text>hello</Text>
        </View>
    )
}
export default Test