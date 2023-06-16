import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen from '../screen1';
import Results from '../Results';

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Form" component={Screen} />
                <Stack.Screen name="data" component={Results} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MyStack