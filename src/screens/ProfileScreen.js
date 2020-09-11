import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export function ProfileScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>This is profile screen</Text>
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
