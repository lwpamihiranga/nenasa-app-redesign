import uuid from 'uuid-random';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SubjectQuestionsScreenCards } from '../components/SubjectQuestionsScreenCards';

export function SubjectQuestionsScreen({ navigation }) {
	const [questions, setQuestions] = useState([
		{
			id: uuid(),
			text:
				'Fill in the blanks using the verbs given in the brackets.They _____ some greeting cards to celebrate christmas every year. (make)',
			noOfAnswers: 5,
			user: {
				name: 'Madhushan Dilshan',
			},
			date: 'Jan 06 2020',
		},
		{
			id: uuid(),
			text:
				'Can you give me some essay type questions on "Nectar in Sieve"',
			noOfAnswers: 2,
			user: {
				name: 'Thilina Raddegoda',
			},
			date: 'Dec 17 2019',
		},
		{
			id: uuid(),
			text: "What is the past participle of 'cut'",
			noOfAnswers: 3,
			user: {
				name: 'Bathiya Jayasanke',
			},
			date: 'Dec 10 2019',
		},
		{
			id: uuid(),
			text:
				'Fill in the blanks using the verbs given in the brackets. She _____ never going to make it in the real world. (be)',
			noOfAnswers: 2,
			user: {
				name: 'Madushan Dilshan',
			},
			date: 'Sep 13 2019',
		},
		{
			id: uuid(),
			text:
				'Fill in the blanks using the verbs given in the brackets. What ___ wrong with you? (be)',
			noOfAnswers: 2,
			user: {
				name: 'Samadhi Samarathunga',
			},
			date: 'Nov 10 2019',
		},
	]);

	return (
		<View style={styles.container}>
			<Text>This is the Subject Questions Screen</Text>
			<FlatList
				data={questions}
				renderItem={({ question }) => (
					<SubjectQuestionsScreenCards question={question} />
				)}
				keyExtractor={(question, index) => index.toString()}
			/>
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
