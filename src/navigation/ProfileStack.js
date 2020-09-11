import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen } from '../screens/ProfileScreen';
import { TestScreen } from '../screens/TestScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export function ProfileStack({ navigation }) {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					headerLeft: () => {
						return (
							<Ionicons
								name="md-menu"
								size={30}
								color="black"
								onPress={() => navigation.openDrawer()}
							/>
						);
					},
					headerLeftContainerStyle: { paddingLeft: 10 },
				}}
			/>
			<Stack.Screen name="Test" component={TestScreen} />
		</Stack.Navigator>
	);
}
