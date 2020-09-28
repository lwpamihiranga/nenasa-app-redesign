import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import RadioGroup, { Radio } from 'react-native-radio-input';
import DropDownPicker from 'react-native-dropdown-picker';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export function AddPapers() {
	let year = [
		{ value: 'Grade 6' },
		{ value: 'Grade 7' },
		{ value: 'Grade 8' },
		{ value: 'Grade 9' },
		{ value: 'Grade 10' },
		{ value: 'Grade 11' },
		{ value: 'Grade 12' },
		{ value: 'Grade 13' },
	];

	let level = [{ value: 'O/L' }, { value: 'A/L' }];

	getChecked = (value) => {
		console.log(value);
	};

	const [value, onChangeText] = React.useState('');
	const [valuepapers, onChangeTextdesc] = React.useState('');

	const [val, onChangeItem] = React.useState('');

	return (
		<View style={{ flex: 1 }}>
			<View
				style={{
					justifyContent: 'center',
					alignContent: 'space-between',
					marginTop: 10,
					marginBottom: 5,
					flexDirection: 'row',
				}}>
				<Ionicons name="ios-paper" size={24} color="black" />
				<Text
					style={{
						marginLeft: 20,
						fontSize: 19,
						fontWeight: 'bold',
					}}>
					Add Papers
				</Text>
			</View>

			<View
				style={{
					marginBottom: 10,
					marginLeft: 20,
					marginRight: 20,
				}}>
				<DropDownPicker
					items={[
						{ label: 'Biology', value: 'Biology' },
						{ label: 'Physics', value: 'Physics' },
						{ label: 'Chemistry', value: 'Chemistry' },
						{ label: 'Combined Maths', value: 'Combined Maths' },
						{ label: 'Economics', value: 'Economics' },
						{ label: 'Accounting', value: 'Accounting' },
						{
							label: 'Business Management',
							value: 'Business Management',
						},
						{ label: 'IT', value: 'IT' },
						{ label: 'Agriculture', value: 'Agriculture' },
						{ label: 'BC', value: 'BC' },
						{ label: 'Sinhala A/L', value: 'Sinhala A/L' },
						{ label: 'Drama A/L', value: 'Drama A/L' },
						{ label: 'Dancing A/L', value: 'Dancing A/L' },
						{ label: 'Eng Lit A/L', value: 'Eng Lit A/L' },
						{
							label: 'Eng. Technology A/L',
							value: 'Eng. Technology A/L',
						},
						{
							label: 'Biotechnology A/L',
							value: 'Biotechnology A/L',
						},
						{ label: 'Religious O/L', value: 'Religious O/L' },
						{ label: 'English O/L', value: 'English O/L' },
						{ label: 'Sinhala O/L', value: 'Sinhala O/L' },
						{ label: 'Science O/L', value: 'Science O/L' },
						{ label: 'ICT O/L', value: 'ICT O/L' },
						{ label: 'Mathematics O/L', value: 'Mathematics O/L' },
						{ label: 'Art O/L', value: 'Art O/L' },
						{ label: 'Drama O/L', value: 'Drama O/L' },
						{ label: 'Dancing O/L', value: 'Dancing O/L' },
						{ label: 'Music O/L', value: 'Music O/L' },
					]}
					containerStyle={{ height: 50 }}
					style={{ backgroundColor: '#fafafa' }}
					placeholder={'Select Subject'}
					itemStyle={{
						justifyContent: 'flex-start',
					}}
					dropDownStyle={{ backgroundColor: '#fafafa' }}
					onChangeItem={(val) =>
						onChangeItem({
							val: val,
						})
					}
				/>
			</View>
			<TextInput
				style={{
					marginLeft: 20,
					marginRight: 20,
					borderBottomColor: '#000000',
					borderBottomWidth: 1,
					height: 50,
					borderColor: 'gray',
					borderWidth: 1,
					textAlign: 'left',
					paddingLeft: 20,
				}}
				onChangeText={(text) => onChangeText(text)}
				value={value}
				placeholder="Write here......"
			/>
			<TextInput
				style={{
					marginLeft: 20,
					marginRight: 20,
					marginTop: 10,
					borderBottomColor: '#000000',
					borderBottomWidth: 1,
					height: 100,
					borderColor: 'gray',
					borderWidth: 1,
					textAlign: 'left',
					paddingLeft: 20,
				}}
				onChangeText={(textdesc) => onChangeTextdesc(textdesc)}
				value={valuepapers}
				placeholder="Write here......"
				numberOfLines={2}
				multiline={false}
			/>

			<TouchableOpacity
				style={{
					alignItems: 'center',
					backgroundColor: '#DDDDDD',
					padding: 15,
					marginLeft: 20,
					marginRight: 20,
					marginTop: 10,
				}}
				onPress={() => Alert.alert('Successfully submitted')}>
				<Text>Upload File</Text>
			</TouchableOpacity>
			<View
				style={{
					marginLeft: 20,
					marginRight: 20,
					marginTop: 10,
				}}>
				<View style={{ marginBottom: 10 }}>
					<DropDownPicker
						items={[
							{ label: 'Year 6', value: 'Year 6' },
							{ label: 'Year 7', value: 'Year 7' },
							{ label: 'Year 8', value: 'Year 8' },
							{ label: 'Year 9', value: 'Year 9' },
							{ label: 'Year 10', value: 'Year 10' },
							{ label: 'Year 11', value: 'Year 11' },
							{ label: 'Year 12', value: 'Year 12' },
							{ label: 'Year 13', value: 'Year 13' },
						]}
						containerStyle={{ height: 50 }}
						style={{ backgroundColor: '#fafafa' }}
						placeholder={'Select Year'}
						itemStyle={{
							justifyContent: 'flex-start',
						}}
						dropDownStyle={{ backgroundColor: '#fafafa' }}
						onChangeItem={(val) =>
							onChangeItem({
								val: val,
							})
						}
					/>
				</View>

				<DropDownPicker
					items={[
						{ label: 'O/L', value: 'O/L' },
						{ label: 'A/L', value: 'A/L' },
					]}
					containerStyle={{ height: 50, marginBottom: 20 }}
					style={{ backgroundColor: '#fafafa' }}
					placeholder={'Select Level'}
					itemStyle={{
						justifyContent: 'flex-start',
					}}
					dropDownStyle={{ backgroundColor: '#fafafa' }}
					onChangeItem={(items) => onChangeItem({ items })}
				/>
			</View>

			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					flexGrow: 1,
					justifyContent: 'space-evenly',
				}}>
				<RadioGroup
					getChecked={getChecked}
					RadioGroupStyle={{ flexDirection: 'row' }}>
					<Radio
						iconName={'lens'}
						label={'English Medium'}
						value={'A'}
					/>
					<Radio
						iconName={'lens'}
						label={'Sinhala Medium'}
						value={'B'}
					/>
				</RadioGroup>
			</View>

			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					flexGrow: 1,
					justifyContent: 'flex-end',
				}}>
				<TouchableOpacity
					style={{
						flex: 0.5,
						flexDirection: 'row',
						maxHeight: 55,
						marginLeft: 20,
						marginRight: 20,
						justifyContent: 'center',
						alignContent: 'space-between',
					}}
					onPress={() => Alert.alert('Successfully submitted')}>
					<View
						style={{
							flex: 1,
							backgroundColor: '#F7BE56',
							marginRight: 5,
							flexDirection: 'row',
						}}>
						<View
							style={{
								marginLeft: 40,
								marginRight: 0,
								marginTop: 15,
							}}>
							<Entypo name="save" size={24} color="black" />
						</View>
						<View>
							<Text
								style={{
									color: '#000000',
									fontSize: 18,
									marginTop: 12,
									fontWeight: 'bold',
									marginLeft: 3,
								}}>
								Submit
							</Text>
						</View>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}
