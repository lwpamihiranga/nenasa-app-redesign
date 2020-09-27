import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Alert,
	TouchableOpacity,
	FlatList,
} from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import uuid from 'uuid-random';
import { useState } from 'react';
import { AnswerQuestionCard } from '../components/AnswerQuestionCard';

export function AnswerQuestion({ navigation }) {
	const [value, onChangeText] = React.useState('');
	const [exams, setExams] = useState([
		{
			id: uuid(),
			text: '1. Answer is cut',
			user: {
				name: 'Anjula Dilshani',
			},
			date: 'Apr 19 2019',
		},
		{
			id: uuid(),
			text:
				'2. Same word for present tense,past tense and past participal',
			user: {
				name: 'Chathu',
			},
			date: 'Mar 10 2019',
		},
		{
			id: uuid(),
			text: '3. Same answer-cut',
			user: {
				name: 'Pasindu',
			},
			date: 'Jan 03 2019',
		},
		{
			id: uuid(),
			text: '4. Same word for past tense',
			user: {
				name: 'Kishanika Raj',
			},
			date: 'Jan 01 2019',
		},
	]);

	return (
		<View style={styles.container}>
			<View
				style={{
					marginLeft: 20,
					marginRight: 20,
				}}>
				<View
					style={{
						flexDirection: 'row',
						marginTop: 20,
					}}>
					<View style={styles.allCircle}>
						<FontAwesome
							name="circle"
							size={50}
							color="#892667"
							style={styles.circle}
						/>
						<Text style={styles.firstLetter}>B</Text>
					</View>
					<Text
						style={{ fontSize: 20, marginTop: 5, marginLeft: 20 }}>
						Bathiya Jayasanke
					</Text>
				</View>
				<Text
					style={{
						fontSize: 15,
						marginTop: 0,
						marginLeft: 65,
					}}>
					17,Dec,2019
				</Text>
			</View>

			<Text
				style={{
					fontSize: 23,
					marginTop: 30,
					marginLeft: 20,
					marginRight: 20,
				}}>
				What is the Past tense of 'Cut' ?
			</Text>
			<Text
				style={{
					fontSize: 18,
					marginTop: 30,
					marginLeft: 35,
					color: '#F7BE56',
				}}>
				{' '}
				Answers
			</Text>
			<ScrollView
				style={{
					paddingTop: 10,
					maxHeight: 330,
				}}>
				<FlatList
					data={exams}
					renderItem={({ item }) => (
						<AnswerQuestionCard exam={item} />
					)}
					keyExtractor={(item, index) => index.toString()}
				/>
			</ScrollView>

			<View style={{ flexDirection: 'row', marginTop: 55 }}>
				<TextInput
					style={{
						borderColor: 'gray',
						borderWidth: 0.5,
						marginTop: 20,
						marginLeft: 20,
						height: 50,
						width: '80%',
					}}
					onChangeText={(text) => onChangeText(text)}
					value={value}
					placeholder="  Answer here......"
				/>
				<TouchableOpacity
					style={{
						flex: 1,
						maxHeight: 70,
						marginTop: 20,
						marginLeft: 0,
						marginRight: 20,
						maxWidth: 50,
					}}
					onPress={() => Alert.alert('Successfully submitted')}>
					<View
						style={{
							flex: 1,
							backgroundColor: '#F7BE56',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<Entypo name="direction" size={24} color="black" />
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44,
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
		position: 'relative',
	},
});
