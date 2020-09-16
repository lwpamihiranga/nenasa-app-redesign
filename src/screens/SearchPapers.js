import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	FlatList,
	Platform,
	TouchableHighlight,
	Alert,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioGroup, { Radio } from 'react-native-radio-input';
import { SearchBar } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

export function SearchPapers({ navigation }) {
	getChecked = (value) => {
		console.log(value);
	};

	const [search, updateSearch] = React.useState('');

	return (
		<View style={{ flex: 1 }}>
			<View
				style={{
					marginBottom: 20,
					marginLeft: 20,
					marginRight: 20,
					marginTop: 20,
					marginBottom: 5,
					backgroundColor: '#ffffff',
				}}>
				<SearchBar
					placeholder="Type Here..."
					onChangeText={updateSearch}
					value={search}
					containerStyle={{
						backgroundColor: '#f4f4f4',
						borderBottomColor: '#f4f4f4',
						borderTopColor: '#f4f4f4',
					}}
				/>
			</View>
			<View
				style={{
					marginBottom: 20,
					marginLeft: 20,
					marginRight: 20,
					marginTop: 20,
					marginBottom: 5,
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

			<View
				style={{
					marginLeft: 20,
					marginRight: 20,
					marginTop: 20,
				}}>
				<View style={{ marginBottom: 20 }}>
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
					marginTop: 20,
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

			<FlatList
				ItemSeparatorComponent={
					Platform.OS !== 'android' &&
					(({ highlighted }) => (
						<View
							style={[
								style.separator,
								highlighted && { marginLeft: 0 },
							]}
						/>
					))
				}
				data={[
					{
						title: 'A/L biology Past Paper 2017.pdf',
						key: 'item1',
						label: 'Uploded by Nenasa Team',
					},
					{
						title: 'A/L Cemistry Past Paper 2017.pdf',
						key: 'item2',
						label: 'Uploded by Nenasa Team',
					},
					{
						title: 'A/L Physics Past Paper 2017.pdf',
						key: 'item3',
						label: 'Uploded by Nenasa Team',
					},
				]}
				renderItem={({ item, index, separators }) => (
					<TouchableHighlight
						key={item.key}
						onPress={() => Alert.alert('Successfully submitted')}
						onShowUnderlay={separators.highlight}
						onHideUnderlay={separators.unhighlight}>
						<View
							style={{
								backgroundColor: 'white',
								marginLeft: 20,
								marginRight: 20,
								flexDirection: 'row',
								marginTop: 5,
							}}>
							<View
								style={{
									marginLeft: 25,
									marginTop: 15,
									marginBottom: 15,
								}}>
								<AntDesign
									name="pdffile1"
									size={50}
									color="black"
								/>
							</View>
							<View
								style={{
									alignItems: 'center',
									marginLeft: 30,
									justifyContent: 'center',
									marginTop: 3,
									marginBottom: 3,
								}}>
								<Text>{item.title}</Text>
								<Text>{item.label}</Text>
							</View>
						</View>
					</TouchableHighlight>
				)}
			/>

			<TouchableOpacity
				style={{
					justifyContent: 'flex-end',
					alignItems: 'flex-end',
					marginRight: 20,
				}}
				activeOpacity={0.5}
				onPress={() => navigation.navigate('AddPapers')}>
				<AntDesign name="pluscircle" size={50} color="black" />
			</TouchableOpacity>
		</View>
	);
}
