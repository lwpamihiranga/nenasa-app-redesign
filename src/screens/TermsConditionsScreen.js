import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

export function TermsConditionsScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<ScrollView>
				<Text style={styles.text}>
					1.This is often accomplished with an illustration that
					presents your business model in an easy-to-digest manner,
					like this one used by Taaluma Totes that explains how they
					source materials for their products and how donations help
					support the country of origin.{'\n'}
					{'\n'}
				</Text>
				<Text style={styles.text}>
					2.This is often accomplished with an illustration that
					presents your business model in an easy-to-digest manner,
					like this one used by Taaluma Totes that explains how they
					source materials for their products and how donations help
					support the country of origin.{'\n'}
					{'\n'}
				</Text>
				<Text style={styles.text}>
					3.This is often accomplished with an illustration that
					presents your business model in an easy-to-digest manner,
					like this one used by Taaluma Totes that explains how they
					source materials for their products and how donations help
					support the country of origin.{'\n'}
					{'\n'}
				</Text>
				<Text style={styles.text}>
					4.This is often accomplished with an illustration that
					presents your business model in an easy-to-digest manner,
					like this one used by Taaluma Totes that explains how they
					source materials for their products and how donations help
					support the country of origin.{'\n'}
					{'\n'}
				</Text>
				<Text style={styles.text}>
					5.This is often accomplished with an illustration that
					presents your business model in an easy-to-digest manner,
					like this one used by Taaluma Totes that explains how they
					source materials for their products and how donations help
					support the country of origin.{'\n'}
					{'\n'}
				</Text>
				<Text style={styles.text}>
					6.This is often accomplished with an illustration that
					presents your business model in an easy-to-digest manner,
					like this one used by Taaluma Totes that explains how they
					source materials for their products and how donations help
					support the country of origin.{'\n'}
					{'\n'}
				</Text>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		marginTop: 30,
		marginHorizontal: 20,
	},
	text: {
		fontSize: 16,
	},
});
