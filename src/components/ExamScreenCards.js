import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	alertMessage,
	Alert,
	alert,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function ExamScreenCards({ exam }) {
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
		<TouchableOpacity
			style={styles.card}
			onPress={() =>
				Alert.alert(
					'important !',
					'You wish to proceed with this quiz?',
					[
						{
							text: 'Cancel',
							onPress: () => console.log('Cancel Pressed!'),
						},
						{
							text: 'Start',
							onPress: () => navigation.navigate('FaceExamPage1'),
						},
					]
				)
			}>
			<Text style={styles.text}>{exam.text}</Text>
			<View style={styles.upperhalf}>
				<View style={styles.carets}>
					<AntDesign name="caretup" size={24} color="black" />
					<AntDesign name="caretdown" size={24} color="black" />
				</View>
				<View>
					<Text style={styles.noOfQuestions}>
						{exam.noOfQuestions} questions
					</Text>
					<Text style={styles.noOfAttempts}>
						{exam.noOfAttempts} attempts
					</Text>
				</View>
			</View>
			<View style={styles.lowerhalf}>
				<TouchableOpacity style={styles.button}>
					<Text>Try</Text>
					<AntDesign name="arrowright" size={20} color="black" />
				</TouchableOpacity>
				<View style={styles.allCircle}>
					<FontAwesome
						name="circle"
						size={50}
						color={getRandomColor()}
						style={styles.circle}
					/>
					<Text style={styles.firstLetter}>
						{getFirstLetter(exam.user.name)}
					</Text>
				</View>
				<View style={styles.person}>
					<Text style={styles.name}>
						{exam.user.name.slice(0, 17)}
					</Text>
					<Text style={styles.date}>{exam.date}</Text>
				</View>
			</View>
		</TouchableOpacity>
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
		marginStart: 20,
	},
	upperhalf: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 5,
	},
	carets: {
		justifyContent: 'space-between',
	},
	lowerhalf: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 5,
		marginTop: 10,
	},
	noOfAttempts: {
		fontSize: 14,
		color: '#000',
	},
	noOfQuestions: {
		fontSize: 14,
		color: '#000',
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
		paddingEnd: 20,
	},
	allCircle: {
		position: 'relative',
		justifyContent: 'center',
		alignItems: 'center',
		marginEnd: 10,
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
		marginTop: 5,
	},
});
