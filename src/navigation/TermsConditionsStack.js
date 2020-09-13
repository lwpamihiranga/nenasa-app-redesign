import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TermsConditionsScreen } from '../screens/TermsConditionsScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export function TermsConditionsStack({ navigation }) {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Terms and Conditions"
				component={TermsConditionsScreen}
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
