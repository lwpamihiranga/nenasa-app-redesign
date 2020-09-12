import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export function ProfileScreen({ navigation }) {
	return (
		<View style={{ flex: 1, backgroundColor: 'red', margin: 10 }}>
			<View
				style={{ flex: 2, backgroundColor: 'green', margin: 5 }}></View>
			<View
				style={{ flex: 1, backgroundColor: 'blue', margin: 5 }}></View>
			<View
				style={{
					flex: 4,
					backgroundColor: 'yellow',
					margin: 5,
				}}></View>
		</View>
	);
}

const styles = StyleSheet.create({});
