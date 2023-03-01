import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { Welcome } from '../screens/Welcome';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '../global/theme';

const Stack = createNativeStackNavigator();

export function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}