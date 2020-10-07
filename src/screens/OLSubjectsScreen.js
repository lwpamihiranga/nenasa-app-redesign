import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export function OLSubjectsScreen({ route, navigation }) {
	const [isSinhala, setIsSinhala] = useState(false);

	let religion = 'ආගම';
	let english = 'ඉංග්‍රීසි';
	let sinhala = 'සිංහල';
	let science = 'විද්‍යාව';
	let informationTechnology = 'තොරතුරු තාක්ෂණය';
	let mathematics = 'ගණිතය';
	let art = 'කලාව';
	let drama = 'නාට්‍ය';
	let dancing = 'නැටුම්';
	let music = 'සංගීතය';

	useEffect(() => {
		setIsSinhala(route.params.isSinhala);
	});

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
						<FontAwesome5 name="cross" size={50} color="black" />
						{isSinhala === true ? (
							<Text>{religion}</Text>
						) : (
							<Text>Religious</Text>
						)}
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
						<Ionicons name="ios-paper" size={50} color="black" />
						{isSinhala === true ? (
							<Text>{english}</Text>
						) : (
							<Text>English</Text>
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
						<Ionicons name="ios-paper" size={50} color="black" />
						{isSinhala === true ? (
							<Text>{sinhala}</Text>
						) : (
							<Text>Sinhala</Text>
						)}
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
						<SimpleLineIcons
							name="chemistry"
							size={50}
							color="black"
						/>
						{isSinhala === true ? (
							<Text>{science}</Text>
						) : (
							<Text>Science</Text>
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
						{isSinhala === true ? (
							<Text>{informationTechnology}</Text>
						) : (
							<Text>ICT</Text>
						)}
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
							name="calculator-variant"
							size={50}
							color="black"
						/>
						{isSinhala === true ? (
							<Text>{mathematics}</Text>
						) : (
							<Text>Mathematics</Text>
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
							name="draw"
							size={50}
							color="black"
						/>
						{isSinhala === true ? (
							<Text>{art}</Text>
						) : (
							<Text>Art</Text>
						)}
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
							name="drama-masks"
							size={50}
							color="black"
						/>
						{isSinhala === true ? (
							<Text>{drama}</Text>
						) : (
							<Text>Drama</Text>
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
						<Entypo name="man" size={50} color="black" />
						{isSinhala === true ? (
							<Text>{dancing}</Text>
						) : (
							<Text>Dancing</Text>
						)}
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
						<Ionicons
							name="md-musical-note"
							size={50}
							color="black"
						/>
						{isSinhala === true ? (
							<Text>{music}</Text>
						) : (
							<Text>Music</Text>
						)}
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({});
