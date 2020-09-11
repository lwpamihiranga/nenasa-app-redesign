import uuid from 'uuid-random';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export function SubjectQuestionsScreenCards({ navigation, question }) {
	// console.log(question.text);
	return (
		<View style={styles.container}>
			<Text>This is the Subject Questions Screen</Text>
			{/* <Text>{question.text}</Text>
			<Text>{question.noOfAnswers}</Text>
			<Text>{question.user.name}</Text>
			<Text>{question.date}</Text> */}
			<Button title="1" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
