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
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown-v2';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export function AnswerQuestion({ navigation }) {
	const [value, onChangeText] = React.useState('');

	return (
		<View style={styles.container}>
			<View
				style={{
					backgroundColor: '#d3d3d3',
					marginLeft: 20,
					marginRight: 20,
				}}>
				<View
					style={{
						flexDirection: 'row',
					}}>
					<FontAwesome
						style={{ marginLeft: 15, marginTop: 30 }}
						name="user-circle-o"
						size={45}
						color="black"
					/>
					<Text
						style={{ fontSize: 20, marginTop: 35, marginLeft: 20 }}>
						Bathiya Jayasanke
					</Text>
				</View>
				<Text
					style={{
						fontSize: 15,
						marginTop: 0,
						marginLeft: 75,
						marginBottom: 20,
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
					fontSize: 23,
					marginTop: 30,
					marginLeft: 140,
					color: '#F7BE56',
				}}>
				{' '}
				Answers
			</Text>
			<ScrollView
				style={{
					backgroundColor: '#d3d3d3',
					marginLeft: 20,
					marginRight: 20,
					marginTop: 10,
					maxHeight: 330,
				}}>
				<FlatList
					style={{ marginLeft: 20 }}
					data={[
						{ key: 'Cut - Amith Mihiranga' },
						{ key: 'Cut - Tereen Prasanga' },
						{ key: 'Cut - Upuli Han' },
						{ key: 'Cut - Husmitha Silva' },
						{ key: 'Cut - Kasun Rajapaksha' },
						{ key: 'Cut - Lalidu Bhagya' },
						{ key: 'Cut - Praba Jayalath' },
						{ key: 'Cut - Hasitha Rajakaruna' },
						{ key: 'Cut - Kamal Silva' },
						{ key: 'Cut - Deshan Sudun' },
					]}
					renderItem={({ item }) => (
						<Text style={styles.item}>{item.key}</Text>
					)}
				/>
			</ScrollView>

			<View style={{ flexDirection: 'row' }}>
				<TextInput
					style={{
						backgroundColor: '#d3d3d3',
						marginTop: 20,
						marginLeft: 20,
						height: 70,
						width: 320,
					}}
					onChangeText={(text) => onChangeText(text)}
					value={value}
					placeholder="Answer here......"
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
});
