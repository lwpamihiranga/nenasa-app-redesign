import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AboutUsScreen } from '../screens/AboutUsScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export function AboutUsStack({ navigation }) {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="About us"
				component={AboutUsScreen}
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
		</Stack.Navigator>
	);
}
