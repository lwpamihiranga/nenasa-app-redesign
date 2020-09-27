import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export function OtherPages({ navigation }) {


	let general = "සාමාන්‍ය  IT";
		let human = "මානව සම්පත් ";
		let leader = "නායකත්ව වැඩසටහන්";
		let vocal = "වාචික පුහුණුව";
		let psychology = "මනෝවිද්යාව";
		let hardware = "දෘඩාංග පාඨමාලා";
		let personal = "පුද්ගලික සංවර්ධනය";

	return (
		<View style={{ flex: 1, margin: 10 }}>
			<View
				style={{
					justifyContent: 'center',
					alignContent: 'space-between',
					marginTop: 10,
					marginBottom: 10,
					flexDirection: 'row',
				}}>
				<Ionicons name="md-school" size={30} color="black" />
				<Text
					style={{
						marginLeft: 20,
						fontSize: 19,
						fontWeight: 'bold',
					}}>
					Select Subject
				</Text>
			</View>

			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					margin: 5,
				}}>
				<TouchableOpacity
					style={{ flex: 1 }}
					onPress={() =>
						navigation.navigate('SubjectQuestionsScreen')
					}>
					<View
						style={{
							flex: 1,
							backgroundColor: '#F7BE56',
							marginRight: 5,
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<MaterialIcons
							name="laptop-windows"
							size={50}
							color="black"
						/>
						<Text>General IT</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={{ flex: 1 }}
					onPress={() =>
						navigation.navigate('SubjectQuestionsScreen')
					}>
					<View
						style={{
							flex: 1,
							backgroundColor: '#F7BE56',
							marginLeft: 5,
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<AntDesign name="github" size={50} color="black" />
						<Text>Github</Text>
					</View>
				</TouchableOpacity>
			</View>
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					margin: 5,
				}}>
				<TouchableOpacity
					style={{ flex: 1 }}
					onPress={() =>
						navigation.navigate('SubjectQuestionsScreen')
					}>
					<View
						style={{
							flex: 1,
							backgroundColor: '#F7BE56',
							marginRight: 5,
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<FontAwesome5 name="java" size={50} color="black" />
						<Text>Java</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={{ flex: 1 }}
					onPress={() =>
						navigation.navigate('SubjectQuestionsScreen')
					}>
					<View
						style={{
							flex: 1,
							backgroundColor: '#F7BE56',
							marginLeft: 5,
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<FontAwesome5 name="python" size={50} color="black" />
						<Text>Python</Text>
					</View>
				</TouchableOpacity>
			</View>
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					margin: 5,
				}}>
				<TouchableOpacity
					style={{ flex: 1 }}
					onPress={() =>
						navigation.navigate('SubjectQuestionsScreen')
					}>
					<View
						style={{
							flex: 1,
							backgroundColor: '#F7BE56',
							marginRight: 5,
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<MaterialCommunityIcons
							name="human-greeting"
							size={50}
							color="black"
						/>
						<Text>Human Resources</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={{ flex: 1 }}
					onPress={() =>
						navigation.navigate('SubjectQuestionsScreen')
					}>
					<View
						style={{
							flex: 1,
							backgroundColor: '#F7BE56',
							marginLeft: 5,
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<Foundation
							name="social-skillshare"
							size={50}
							color="black"
						/>
						<Text>Leadership Programme</Text>
					</View>
				</TouchableOpacity>
			</View>
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					margin: 5,
				}}>
				<TouchableOpacity
					style={{ flex: 1 }}
					onPress={() =>
						navigation.navigate('SubjectQuestionsScreen')
					}>
					<View
						style={{
							flex: 1,
							backgroundColor: '#F7BE56',
							marginRight: 5,
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<MaterialIcons
							name="record-voice-over"
							size={50}
							color="black"
						/>
						<Text>Vocal Training</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={{ flex: 1 }}
					onPress={() =>
						navigation.navigate('SubjectQuestionsScreen')
					}>
					<View
						style={{
							flex: 1,
							backgroundColor: '#F7BE56',
							marginLeft: 5,
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<MaterialCommunityIcons
							name="brain"
							size={50}
							color="black"
						/>
						<Text>Psychology</Text>
					</View>
				</TouchableOpacity>
			</View>
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					margin: 5,
				}}>
				<TouchableOpacity
					style={{ flex: 1 }}
					onPress={() =>
						navigation.navigate('SubjectQuestionsScreen')
					}>
					<View
						style={{
							flex: 1,
							backgroundColor: '#F7BE56',
							marginRight: 5,
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<Feather name="hard-drive" size={50} color="black" />
						<Text>Hardware Courses</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={{ flex: 1 }}
					onPress={() =>
						navigation.navigate('SubjectQuestionsScreen')
					}>
					<View
						style={{
							flex: 1,
							backgroundColor: '#F7BE56',
							marginLeft: 5,
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<MaterialCommunityIcons
							name="human-handsup"
							size={50}
							color="black"
						/>
						<Text>Personal Development</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}
