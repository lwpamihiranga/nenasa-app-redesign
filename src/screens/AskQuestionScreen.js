import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	Alert,
	TouchableOpacity,
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown-v2';
import { AntDesign } from '@expo/vector-icons';

export function AskQuestionScreen({ navigation }) {
	let data = [
		{
			value: 'grade 6',
		},
		{
			value: 'grade 7',
		},
		{
			value: 'grade 8',
		},
		{
			value: 'grade 9',
		},
		{
			value: 'grade 10',
		},
		{
			value: 'grade 11',
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
			<Dropdown
				
				label="Select grade or lesson"
				data={data}
			/>
			
			</View>
			<TextInput
				style={styles.textQ}
				onChangeText={(text) => onChangeText(text)}
				value={value}
				placeholder="Write here......"
				numberOfLines={2}
				multiline={false}
			/>

			<TouchableOpacity
				style={{
					flex: 1,
					maxHeight: 100,
					marginTop: 20,
					marginLeft: 20,
					marginRight: 20,
				}}>
				<View
					style={{
						flex: 1,
						backgroundColor: '#d3d3d3',
						marginRight: 5,
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<AntDesign name="upload" size={24} color="black" />

					<Text>upload a Image</Text>
					<Text>(Optional)</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					flex: 1,
					maxHeight: 60,
					marginTop: 20,
					marginLeft: 20,
					marginRight: 20,
				}}
				onPress={() => Alert.alert('Successfully submitted')}>
				<View
					style={{
						flex: 1,
						backgroundColor: '#F7BE56',
						marginRight: 5,
						justifyContent: 'center',
						alignItems: 'center',
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
		marginLeft: 20,
		marginRight: 20,
		marginTop: 50,
		height: 62,
		backgroundColor:'#d3d3d3',
		
	},
	textQ: {
		marginLeft: 20,
		marginRight: 20,
		marginTop: 20,
		borderBottomColor: '#000000',
		borderBottomWidth: 1,
		height: 300,
		borderColor: 'gray',
		borderWidth: 1,
		textAlign: 'justify',
	},
});
