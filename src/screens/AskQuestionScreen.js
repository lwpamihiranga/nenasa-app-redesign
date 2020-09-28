import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Alert,
	TouchableOpacity,
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown-v2';
import { AntDesign, Ionicons } from '@expo/vector-icons';

export function AskQuestionScreen({ navigation }) {
	let data = [
		{
			value: 'Grade 6',
		},
		{
			value: 'Grade 7',
		},
		{
			value: 'Grade 8',
		},
		{
			value: 'Grade 9',
		},
		{
			value: 'Grade 10',
		},
		{
			value: 'Grade 11',
		},
		{
			value: 'History',
		},
		{
			value: 'English',
		},
		{
			value: 'Sinhala',
		},
		{
			value: 'Chemistry',
		},
		{
			value: 'Physics',
		},
		{
			value: 'Biology',
		},
	];
	const [value, onChangeText] = React.useState('');

	return (
		<View style={styles.container}>
			<View style={styles.dropdow}>
				<Dropdown label="Select grade or lesson" data={data} />
				<Ionicons
					name="md-arrow-dropdown"
					size={24}
					color="black"
					style={styles.bigBottomdropIcon}
				/>
			</View>
			<TextInput
				style={styles.textQ}
				onChangeText={(text) => onChangeText(text)}
				value={value}
				placeholder="What is your question?"
				numberOfLines={2}
				multiline={false}
			/>
			<TouchableOpacity
				style={{
					flex: 1,
					maxHeight: 80,
					marginTop: 15,
					marginLeft: 15,
					marginRight: 15,
				}}>
				<View
					style={{
						flex: 1,
						backgroundColor: '#d3d3d3',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<AntDesign name="upload" size={24} color="black" />
					<Text>Upload a Image</Text>
					<Text>(Optional)</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					width: '90%',
					alignSelf: 'center',
					marginTop: 120,
				}}
				onPress={() => Alert.alert('Successfully submitted')}>
				<View
					style={{
						flex: 1,
						backgroundColor: '#F7BE56',
						justifyContent: 'center',
						alignItems: 'center',
						paddingVertical: 25,
					}}>
					<Text style={{ color: '#f0f8ff', fontSize: 18 }}>
						Submit
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	dropdow: {
		marginLeft: 15,
		marginRight: 15,
		marginTop: 15,
		height: 60,
		backgroundColor: '#E5E5E5',
	},
	bigBottomdropIcon: {
		position: 'absolute',
		marginTop: 18,
		marginStart: 340,
	},
	textQ: {
		marginLeft: 15,
		marginRight: 15,
		paddingLeft: 15,
		marginTop: 20,
		height: 300,
		borderColor: 'gray',
		borderWidth: 1,
		textAlign: 'justify',
	},
});
