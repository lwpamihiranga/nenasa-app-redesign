import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function SubjectQuestionsScreenCards({ question }) {
	const navigation = useNavigation();
	const [colors, setColors] = useState([
		'#892667',
		'#4FB471',
		'#FCD462',
		'#C91212',
		'#2E579A',
		'#D23782',
		'#5DACD9',
	]);

	const getRandomColor = () => {
		return colors[Math.floor(Math.random() * colors.length)];
	};

	const getFirstLetter = (name) => {
		return name.charAt(0);
	};

	return (
		<View style={styles.card}>
			<Text style={styles.text}>{question.text}</Text>
			<View style={styles.lowerhalf}>
				<View>
					<Text style={styles.noOfAnswers}>
						{question.noOfAnswers} answers
					</Text>
					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate('AnswerQuestion')}>
						<Text>Answer</Text>
						<AntDesign name="arrowright" size={20} color="black" />
					</TouchableOpacity>
				</View>
				<View style={styles.allCircle}>
					<FontAwesome
						name="circle"
						size={50}
						color={getRandomColor()}
						style={styles.circle}
					/>
					<Text style={styles.firstLetter}>
						{getFirstLetter(question.user.name)}
					</Text>
				</View>
				<View style={styles.person}>
					<Text style={styles.name}>
						{question.user.name.slice(0, 17)}
					</Text>
					<Text style={styles.date}>{question.date}</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
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
	},
	lowerhalf: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginHorizontal: 5,
	},
	noOfAnswers: {
		fontSize: 14,
		color: '#0000',
	},
	button: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '40%',
		backgroundColor: '#fff',
		shadowColor: '#000',
		shadowOpacity: 0.9,
		shadowRadius: 1,
		shadowOffset: { width: 3, height: 3 },
		elevation: 10,
		padding: 10,
	},
	allCircle: {
		position: 'relative',
		justifyContent: 'center',
		alignItems: 'center',
	},
	firstLetter: {
		fontSize: 20,
		color: 'white',
		position: 'absolute',
	},
	circle: {
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
	},
	person: {
		margin: 10,
	},
});
