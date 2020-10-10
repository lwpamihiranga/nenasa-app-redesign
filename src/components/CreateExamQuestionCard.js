import React, { useState } from 'react';
import uuid from 'uuid-random';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { CreateExamAnswerCard } from '../components/CreateExamAnswerCard';

export function CreateExamQuestionCard({ navigation }) {
	const [answerCards, setAnswerCards] = useState([]);

	const [question, setQuestion] = useState({
		id: 1,
		text: '',
		answers: [
			{
				id: uuid(),
				text: '',
			},
		],
		correctAnswer: 0,
	});
	const createExamAnswerCard = (text) => {
		if (!text) {
			Alert.alert('Error', 'Please enter an answer', [{ text: 'Ok' }]);
		} else {
			setQuestion((prevQuestions) => {
				// return [{id:uuid(),text,}]
			});
		}
	};

	let addAnAnswerCard = () => {
		setAnswerCards([
			...answerCards,
			<CreateExamAnswerCard
				createExamAnswerCard={createExamAnswerCard}
				key={uuid()}
			/>,
		]);
	};

	return (
		<View>
			<View style={styles.mainCard}>
				<View style={styles.topSubCard}>
					<Text style={styles.no}>{question.id}.</Text>
					<TextInput
						style={styles.questionTextInput}
						placeholder="Your question here..."
						placeholderTextColor="black"
					/>
				</View>
				{answerCards}
				<TouchableOpacity
					style={styles.addAnswer}
					onPress={addAnAnswerCard}>
					<AntDesign name="pluscircle" size={30} color="black" />
					<Text style={styles.buttonText}>Add answer</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	mainCard: {
		backgroundColor: '#F2F2F2',
		marginHorizontal: 10,
		padding: 10,
		flexDirection: 'column',
		marginTop: 5,
		marginBottom: 5,
	},
	topSubCard: {
		flexDirection: 'row',
		alignContent: 'space-between',
	},
	no: {
		fontSize: 23,
		fontWeight: 'bold',
		textAlignVertical: 'center',
		marginEnd: 10,
		marginStart: 6,
	},
	questionTextInput: {
		backgroundColor: '#E5E5E5',
		fontSize: 18,
		width: '90%',
	},
	addAnswer: {
		flexDirection: 'row',
		width: '40%',
		justifyContent: 'space-between',
		backgroundColor: '#E5E5E5',
		shadowColor: '#000',
		shadowOpacity: 0.9,
		shadowRadius: 1,
		shadowOffset: { width: 3, height: 3 },
		elevation: 5,
		padding: 10,
		alignSelf: 'flex-end',
		marginTop: 5,
		marginEnd: 5,
	},
	buttonText: {
		fontSize: 18,
		alignSelf: 'center',
	},
	card: {
		backgroundColor: '#fff',
		marginBottom: 10,
		marginLeft: '2%',
		width: '96%',
		shadowColor: '#000',
		shadowOpacity: 0.9,
		shadowRadius: 1,
		shadowOffset: { width: 3, height: 3 },
		elevation: 5,
		padding: 10,
	},
	text: {
		fontSize: 16,
		textAlign: 'justify',
		marginBottom: 10,
		marginStart: 20,
	},
});
