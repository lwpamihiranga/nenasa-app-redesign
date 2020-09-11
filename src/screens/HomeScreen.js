import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Button
				onPress={() => navigation.navigate('Test')}
				title="Go to Test Screen"
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
