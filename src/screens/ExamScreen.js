import uuid from 'uuid-random';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { ExamScreenCards } from '../components/ExamScreenCards';
import Header from '../components/Header';

export function ExamScreen({ navigation }) {
	const [exams, setExams] = useState([
		{
			id: uuid(),
			text: 'A/L Geographical Science - Sinhala Medium',
			noOfQuestions: 5,
			noOfAttempts: 104,
			user: {
				name: 'Anjula Dilshani',
			},
			date: 'Apr 19 2019',
		},
		{
			id: uuid(),
			text: 'O/L History - Sinhala Medium',
			noOfQuestions: 10,
			noOfAttempts: 192,
			user: {
				name: 'Chathu',
			},
			date: 'Mar 10 2019',
		},
		{
			id: uuid(),
			text: 'A/L Buddhism - Sinhala Medium',
			noOfQuestions: 10,
			noOfAttempts: 11,
			user: {
				name: 'Pasindu',
			},
			date: 'Jan 03 2019',
		},
		{
			id: uuid(),
			text: 'O/L Chemistry - English Medium',
			noOfQuestions: 10,
			noOfAttempts: 5,
			user: {
				name: 'Kishanika Raj',
			},
			date: 'Jan 01 2019',
		},
	]);

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={exams}
				renderItem={({ item }) => <ExamScreenCards exam={item} />}
				keyExtractor={(item, index) => index.toString()}
			/>
			<AntDesign
				name="pluscircle"
				size={50}
				color="black"
				style={styles.floatButton}
				onPress={() => console.log('adsf')}
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
