import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { TestScreen } from '../screens/TestScreen';

const Stack = createStackNavigator();

export function HomeStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="Test" component={TestScreen} />
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({});
