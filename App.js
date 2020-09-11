import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStack } from './src/navigation/HomeStack';
import { ProfileStack } from './src/navigation/ProfileStack';

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar style="auto" />
			<Drawer.Navigator initialRouteName="Home">
				<Drawer.Screen name="Home" component={HomeStack} />
				<Drawer.Screen name="User Account" component={ProfileStack} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
