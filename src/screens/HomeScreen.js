import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, margin: 10 }}>
			<StatusBar style="dark" backgroundColor="#adadad" />
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					margin: 5,
				}}>
				<TouchableOpacity
					style={{ flex: 1 }}
					onPress={() => navigation.navigate('A/L Subjects')}>
					<View
						style={{
							flex: 1,
							backgroundColor: '#F7BE56',
							marginRight: 5,
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<MaterialIcons name="school" size={100} color="black" />
						<Text>Advanced Level</Text>
						<Text>(A/L)</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={{ flex: 1 }}
					onPress={() => navigation.navigate('O/L Subjects')}>
					<View
						style={{
							flex: 1,
							backgroundColor: '#F7BE56',
							marginLeft: 5,
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<FontAwesome5
							name="university"
							size={90}
							color="black"
						/>
						<Text>Ordinary Level</Text>
						<Text>(O/L)</Text>
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
					onPress={() => navigation.navigate('Test')}>
					<View
						style={{
							flex: 1,
							backgroundColor: '#F7BE56',
							marginRight: 5,
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<MaterialIcons
							name="assessment"
							size={100}
							color="black"
						/>
						<Text>Other Courses</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={{ flex: 1 }}
					onPress={() => navigation.navigate('Test')}>
					<View
						style={{
							flex: 1,
							backgroundColor: '#F7BE56',
							marginLeft: 5,
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<Ionicons name="ios-paper" size={100} color="black" />
						<Text>Papers Page</Text>
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
					onPress={() => navigation.navigate('ExamScreen')}>
					<View
						style={{
							flex: 1,
							backgroundColor: '#F7BE56',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<FontAwesome5
							name="book-open"
							size={100}
							color="black"
						/>
						<Text>Exams and Tests</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({});
