import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export function HomeScreen({ navigation }) {
	const [isSinhala, setIsSinhala] = useState(true);

	let advancedLevel = 'උසස් පෙළ';
	let ordinaryLevel = 'සාමාන්‍ය පෙළ';
	let otherCourses = 'වෙනත් පාඨමාලා';
	let papersPage = 'ප්‍රශ්න පත්‍ර පිටුව';
	let examPage = 'විභාග පිටුව';

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
					onPress={() =>
						navigation.navigate('A/L Subjects', {
							isSinhala: isSinhala,
						})
					}>
					<View
						style={{
							flex: 1,
							backgroundColor: '#F7BE56',
							marginRight: 5,
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<MaterialIcons name="school" size={100} color="black" />
						{isSinhala === true ? (
							<View>
								<Text>{advancedLevel}</Text>
								<Text style={{ textAlign: 'center' }}>
									(උ/පෙළ)
								</Text>
							</View>
						) : (
							<View>
								<Text>Advanced Level</Text>
								<Text style={{ textAlign: 'center' }}>
									(A/L)
								</Text>
							</View>
						)}
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={{ flex: 1 }}
					onPress={() =>
						navigation.navigate('O/L Subjects', {
							isSinhala: isSinhala,
						})
					}>
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
						{isSinhala === true ? (
							<View>
								<Text>{ordinaryLevel}</Text>
								<Text style={{ textAlign: 'center' }}>
									(සා/පෙළ)
								</Text>
							</View>
						) : (
							<View>
								<Text>Ordinary Level</Text>
								<Text style={{ textAlign: 'center' }}>
									(O/L)
								</Text>
							</View>
						)}
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
					onPress={() => navigation.navigate('Other Courses')}>
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
						{isSinhala === true ? (
							<Text>{otherCourses}</Text>
						) : (
							<Text>Other Courses</Text>
						)}
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={{ flex: 1 }}
					onPress={() => navigation.navigate('SearchPapers')}>
					<View
						style={{
							flex: 1,
							backgroundColor: '#F7BE56',
							marginLeft: 5,
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<Ionicons name="ios-paper" size={100} color="black" />
						{isSinhala === true ? (
							<Text>{papersPage}</Text>
						) : (
							<Text>Papers Page</Text>
						)}
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
						{isSinhala === true ? (
							<Text>{examPage}</Text>
						) : (
							<Text>Exams and Tests</Text>
						)}
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({});
