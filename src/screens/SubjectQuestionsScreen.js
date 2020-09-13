import uuid from 'uuid-random';
import React, { useState } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { SubjectQuestionsScreenCards } from '../components/SubjectQuestionsScreenCards';
import Header from '../components/Header';

export function SubjectQuestionsScreen({ navigation }) {
	const [questions, setQuestions] = useState([
		{
			id: uuid(),
			text:
				'Fill in the blanks using the verbs given in the brackets.\n\nThey _____ some greeting cards to celebrate christmas every year. (make)',
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
				'Fill in the blanks using the verbs given in the brackets.\n\nShe _____ never going to make it in the real world. (be)',
			noOfAnswers: 2,
			user: {
				name: 'Madushan Dilshan',
			},
			date: 'Sep 13 2019',
		},
		{
			id: uuid(),
			text:
				'Fill in the blanks using the verbs given in the brackets.\n\nWhat ___ wrong with you? (be)',
			noOfAnswers: 2,
			user: {
				name: 'Samadhi Samarathunga',
			},
			date: 'Nov 10 2019',
		},
	]);

	return (
		<SafeAreaView style={styles.container}>
			{/* <Header title="A/L English" /> */}
			<FlatList
				data={questions}
				renderItem={({ item }) => (
					<SubjectQuestionsScreenCards question={item} />
				)}
				keyExtractor={(item, index) => index.toString()}
				onPress={() => navigation.navigate('AnswerQuestion')}
			/>
			<AntDesign
				name="pluscircle"
				size={50}
				color="black"
				style={styles.floatButton}
				onPress={() => navigation.navigate('AskQuestionScreen')}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	floatButton: {
		position: 'absolute',
		bottom: 30,
		right: 30,
	},
});
