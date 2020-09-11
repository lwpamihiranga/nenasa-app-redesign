import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen } from '../screens/ProfileScreen';
import { TestScreen } from '../screens/TestScreen';

const Stack = createStackNavigator();

export function ProfileStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Profile" component={ProfileScreen} />
			<Stack.Screen name="Test" component={TestScreen} />
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({});
