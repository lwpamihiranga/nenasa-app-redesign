import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export function ALSubjectsScreen({ route, navigation }) {
	const [isSinhala, setIsSinhala] = useState(false);

	let scienceSubjects = 'විද්‍යා විෂයයන්';
	let biology = 'ජීව විද්‍යාව';
	let chemistry = 'රසායන විද්‍යාව';
	let combinedMaths = 'සංයුක්ත ගණිතය';
	let physics = 'භෞතික විද්‍යාව';
	let agriculture = 'කෘෂිකර්මය';
	let informationTechnology = 'තොරතුරු තාක්ෂණය';
	let commerceSubjects = 'වාණිජ විෂයයන්';
	let accounting = 'ගිණුම්කරණය';
	let economics = 'ආර්ථික විද්‍යාව';
	let businessManagement = 'ව්‍යාපාර කළමනාකරණය';
	let commerce = 'වාණිජ කළමනාකරණය';
	let artSubjects = 'කලා විෂයයන්';
	let sinhala = 'සිංහල';
	let buddhistCulture = 'බෞද්ධ සංස්කෘතිය';
	let art = 'කලාව';
	let drama = 'නාට්‍ය';
	let dancing = 'නැටුම්';
	let englishLitereture = 'ඉංග්‍රීසි සාහිත්‍යය';
	let technologySubjects = 'තාක්ෂණ විෂයයන්';
	let bioTechnology = 'ජෛව තාක්ෂණය';
	let scienceForTechnology = 'තාක්ෂණය සඳහා විද්‍යාව';
	let engineeringTechnology = 'ඉංජිනේරු තාක්ෂණය';

	useEffect(() => {
		setIsSinhala(route.params.isSinhala);
	});

	return (
		<View style={{ flex: 1, margin: 10 }}>
			<View
				style={{
					justifyContent: 'center',
					alignContent: 'space-between',
					marginTop: 5,
					marginBottom: 5,
					flexDirection: 'row',
				}}>
				<Ionicons name="md-school" size={30} color="black" />
				<Text
					style={{
						marginLeft: 20,
						fontSize: 19,
						fontWeight: 'bold',
					}}>
					{isSinhala === true ? scienceSubjects : 'Science Subjects'}
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
						<FontAwesome5 name="dna" size={30} color="black" />
						{isSinhala === true ? (
							<Text>{biology}</Text>
						) : (
							<Text>Biology</Text>
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
							name="math-integral"
							size={30}
							color="black"
						/>
						{isSinhala === true ? (
							<Text style={{ textAlign: 'center', fontSize: 13 }}>
								{combinedMaths}
							</Text>
						) : (
							<Text>Combined Maths</Text>
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
							name="math-compass"
							size={30}
							color="black"
						/>
						{isSinhala === true ? (
							<Text>{physics}</Text>
						) : (
							<Text>Physics</Text>
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
						<SimpleLineIcons
							name="chemistry"
							size={30}
							color="black"
						/>
						{isSinhala === true ? (
							<Text>{chemistry}</Text>
						) : (
							<Text>Chemistry</Text>
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
							name="flower"
							size={30}
							color="black"
						/>
						{isSinhala === true ? (
							<Text>{agriculture}</Text>
						) : (
							<Text>Agriculture</Text>
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
						<MaterialIcons
							name="laptop-chromebook"
							size={30}
							color="black"
						/>
						{isSinhala === true ? (
							<Text style={{ textAlign: 'center', fontSize: 12 }}>
								{informationTechnology}
							</Text>
						) : (
							<Text>IT</Text>
						)}
					</View>
				</TouchableOpacity>
			</View>

			<View
				style={{
					justifyContent: 'center',
					alignContent: 'space-between',
					marginTop: 5,
					marginBottom: 5,
					flexDirection: 'row',
				}}>
				<Ionicons name="md-school" size={30} color="black" />
				<Text
					style={{
						marginLeft: 20,
						fontSize: 19,
						fontWeight: 'bold',
					}}>
					Commerce Subjects
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
						<MaterialCommunityIcons
							name="newspaper-variant-multiple-outline"
							size={30}
							color="black"
						/>
						{isSinhala === true ? (
							<Text> {accounting}</Text>
						) : (
							<Text>Accounting</Text>
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
							name="finance"
							size={30}
							color="black"
						/>
						{isSinhala === true ? (
							<Text> {economics}</Text>
						) : (
							<Text>Economics</Text>
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
						<Ionicons name="ios-business" size={30} color="black" />
						{isSinhala === true ? (
							<Text>{businessManagement}</Text>
						) : (
							<Text>Business Mnagement</Text>
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
						<MaterialIcons
							name="laptop-chromebook"
							size={30}
							color="black"
						/>
						{isSinhala === true ? (
							<Text>{commerce}</Text>
						) : (
							<Text>Commerce</Text>
						)}
					</View>
				</TouchableOpacity>
			</View>

			<View
				style={{
					justifyContent: 'center',
					alignContent: 'space-between',
					marginTop: 5,
					marginBottom: 5,
					flexDirection: 'row',
				}}>
				<Ionicons name="md-school" size={30} color="black" />
				<Text
					style={{
						marginLeft: 20,
						fontSize: 19,
						fontWeight: 'bold',
					}}>
					Art Subjects
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
						<Ionicons name="ios-paper" size={30} color="black" />
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
						<MaterialCommunityIcons
							name="buddhism"
							size={30}
							color="black"
						/>
						{isSinhala === true ? (
							<Text style={{ textAlign: 'center', fontSize: 13 }}>
								{buddhistCulture}
							</Text>
						) : (
							<Text>BC</Text>
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
							name="draw"
							size={30}
							color="black"
						/>
						{isSinhala === true ? (
							<Text>{art}</Text>
						) : (
							<Text>Art</Text>
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
							name="drama-masks"
							size={30}
							color="black"
						/>
						{isSinhala === true ? (
							<Text>{drama}</Text>
						) : (
							<Text>Drama</Text>
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
						<Entypo name="man" size={30} color="black" />
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
						<Ionicons name="ios-paper" size={30} color="black" />
						{isSinhala === true ? (
							<Text style={{ fontSize: 13 }}>
								{englishLitereture}
							</Text>
						) : (
							<Text>Englist Lit</Text>
						)}
					</View>
				</TouchableOpacity>
			</View>

			<View
				style={{
					justifyContent: 'center',
					alignContent: 'space-between',
					marginTop: 5,
					marginBottom: 5,
					flexDirection: 'row',
				}}>
				<Ionicons name="md-school" size={30} color="black" />
				<Text
					style={{
						marginLeft: 20,
						fontSize: 19,
						fontWeight: 'bold',
					}}>
					Technology Subjects
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
						<MaterialCommunityIcons
							name="math-compass"
							size={24}
							color="black"
						/>
						{isSinhala === true ? (
							<Text style={{ textAlign: 'center', fontSize: 13 }}>
								{engineeringTechnology}
							</Text>
						) : (
							<Text>Eng.Technology</Text>
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
						<FontAwesome5 name="dna" size={30} color="black" />
						{isSinhala === true ? (
							<Text style={{ textAlign: 'center', fontSize: 13 }}>
								{bioTechnology}
							</Text>
						) : (
							<Text>Biotechnology</Text>
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
						<Entypo name="thermometer" size={24} color="black" />
						{isSinhala === true ? (
							<Text style={{ textAlign: 'center', fontSize: 12 }}>
								{scienceForTechnology}
							</Text>
						) : (
							<Text>SFT</Text>
						)}
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}
