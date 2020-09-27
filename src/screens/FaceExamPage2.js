import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Alert,
	TouchableOpacity,
	FlatList,
	Button,
	alert,
	alertMessage,
} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import { AntDesign } from '@expo/vector-icons';
import CountDown from 'react-native-countdown-component';

export function FaceExamPage2({ navigation }) {
	const data = [
		{
			label: 'English',
		},
		{
			label: 'Hindi',
		},
		{
			label: 'Tamil',
		},
		{
			label: 'Bengali',
		},
		{
			label: 'Gujarati',
		},
	];
	return (
		<View style={styles.container}>
			<CountDown
				style={{ marginTop: 30 }}
				size={30}
				until={900}
				onFinish={() => alert('Finished')}
				digitStyle={{
					backgroundColor: '#FFF',
					borderWidth: 2,
					borderColor: '#F7BE56',
				}}
				digitTxtStyle={{ color: 'black' }}
				timeLabelStyle={{ color: 'red', fontWeight: 'bold' }}
				separatorStyle={{ color: '#F7BE56' }}
				timeToShow={['H', 'M', 'S']}
				timeLabels={{ m: null, s: null }}
				showSeparator
			/>
			<Text style={{ marginTop: 20, fontSize: 23, marginLeft: 20 }}>
				What is the national language of india?
			</Text>
			<RadioButtonRN
				style={{ marginLeft: 10, marginTop: 10, marginRight: 10 }}
				data={data}
				selectedBtn={(e) => console.log(e)}
			/>
			<View style={{ flexDirection: 'row', flex: 1 }}>
				<TouchableOpacity
					style={{ flex: 1 }}
					onPress={() => navigation.navigate('FaceExamPage1')}>
					<View
						style={{
							flex: 1,
							backgroundColor: '#F7BE56',
							marginRight: 5,
							justifyContent: 'center',
							alignItems: 'center',
							maxWidth: 80,
							maxHeight: 40,
							marginTop: 10,
							marginLeft: 15,
						}}>
						<AntDesign name="banckward" size={24} color="black" />
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={{ flex: 1 }}
					onPress={() =>
						Alert.alert(
							' Finished',
							'4 answers are correct out of 10',
							[
								{
									text: 'OK',
									onPress: () =>
										navigation.navigate('ExamScreen'),
								},
							]
						)
					}>
					<View
						style={{
							flex: 1,
							backgroundColor: '#F7BE56',
							marginRight: 5,
							justifyContent: 'center',
							alignItems: 'center',
							maxWidth: 80,
							maxHeight: 40,
							marginTop: 10,
							marginLeft: 115,
						}}>
						<AntDesign name="forward" size={24} color="black" />
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
});
