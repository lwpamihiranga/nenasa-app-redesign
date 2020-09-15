import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export function ALSubjectsScreen({ navigation }) {
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
					Science Subjects
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
						<Text>Biology</Text>
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
						<Text>Combined Maths</Text>
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
						<Text>Physics</Text>
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
						<Text>Chemistry</Text>
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
						<Text>Agriculture</Text>
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
						<Text>IT</Text>
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
						<Text>Accounting</Text>
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
						<Text>Economics</Text>
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
						<Text>Business Mnagement</Text>
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
						<Text>IT</Text>
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
						<Text>Sinhala</Text>
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
						<Text>BC</Text>
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
						<Text>Art</Text>
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
						<Text>Drama</Text>
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
						<Text>Dancing</Text>
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
						<Text>English Lit</Text>
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
						<Text>Eng.Technology</Text>
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
						<Text>Biotechnology</Text>
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
						<Text>SFT</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}
