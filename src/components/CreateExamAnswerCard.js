import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { RadioButton, TextInput } from 'react-native-paper';

export function CreateExamAnswerCard({ navigation, createExamAnswerCard }) {
	const [text, setText] = useState('');

	const onAnswerChange = (textValue) => {
		setText(textValue);
		createExamAnswerCard(text);
	};

	return (
		<View style={styles.bottomSubCard}>
			<RadioButton style={styles.radiobutton} />
			<TextInput
				style={styles.answerTextInput}
				placeholder="Your answer here..."
				placeholderTextColor="black"
				onChangeText={onAnswerChange}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	bottomSubCard: {
		flexDirection: 'row',
		marginTop: 10,
	},
	radiobutton: {},
	answerTextInput: {
		backgroundColor: '#E5E5E5',
		fontSize: 18,
		width: '90%',
	},
});
