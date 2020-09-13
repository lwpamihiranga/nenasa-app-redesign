import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStack } from './src/navigation/HomeStack';
import { ProfileStack } from './src/navigation/ProfileStack';
import { TermsConditionsStack } from './src/navigation/TermsConditionsStack';
import { AboutUsStack } from './src/navigation/AboutUsStack';

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar style="auto" />
			<Drawer.Navigator initialRouteName="Home">
				<Drawer.Screen name="Home" component={HomeStack} />
				<Drawer.Screen name="User Account" component={ProfileStack} />
				<Drawer.Screen name="Terms and Conditions" component={TermsConditionsStack} />
				<Drawer.Screen name="About us" component={AboutUsStack} />

			</Drawer.Navigator>
		</NavigationContainer>
	);
}
