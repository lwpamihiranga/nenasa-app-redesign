import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStack } from './src/navigation/HomeStack';
import { ProfileStack } from './src/navigation/ProfileStack';
import { TermsConditionsStack } from './src/navigation/TermsConditionsStack';
import { AboutUsStack } from './src/navigation/AboutUsStack';
import { OnBoardingScreen } from './src/screens/OnBoardingScreen';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Home">
				<Drawer.Screen
					name="Home"
					component={HomeStack}
					options={{
						drawerIcon: () => {
							return (
								<Ionicons
									name="ios-home"
									size={24}
									color="black"
								/>
							);
						},
					}}
				/>
				<Drawer.Screen
					name="User Account"
					component={ProfileStack}
					options={{
						drawerIcon: () => {
							return (
								<FontAwesome5
									name="user"
									size={24}
									color="black"
								/>
							);
						},
					}}
				/>
				<Drawer.Screen
					name="Terms and Conditions"
					component={TermsConditionsStack}
					options={{
						drawerIcon: () => {
							return (
								<Foundation
									name="clipboard-notes"
									size={24}
									color="black"
								/>
							);
						},
					}}
				/>
				<Drawer.Screen
					name="About us"
					component={AboutUsStack}
					options={{
						drawerIcon: () => {
							return (
								<Ionicons
									name="ios-information-circle-outline"
									size={24}
									color="black"
								/>
							);
						},
					}}
				/>
				<Drawer.Screen
					name="User Guide"
					component={OnBoardingScreen}
					options={{
						drawerIcon: () => {
							return (
								<Entypo
									name="help-with-circle"
									size={20}
									color="black"
									style={{ marginLeft: 0 }}
								/>
							);
						},
					}}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
