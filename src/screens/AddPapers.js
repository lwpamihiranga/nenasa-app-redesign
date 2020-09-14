import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown-v2';
import RadioButtonRN from 'radio-buttons-react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export function AddPapers(){

let data = [
    { value: 'Biology'},
    { value: 'Physics'},
    { value: 'Chemistry'},
    { value: 'Combined Maths'},
    { value: 'Economics'},
    { value: 'Accounting'},
    { value: 'Business Management'},
    { value: 'IT '},
    { value: 'Agriculture'},
    { value: 'BC'},
    { value: 'Sinhala A/L'},
    { value: 'Drama A/L'},
    { value: 'Art A/L'},
    { value: 'Biology'},
    { value: 'Dancing A/L'},
    { value: 'Eng Lit A/L'},
    { value: 'Eng. Technology A/L'},
    { value: 'Biotechnology A/L'},
    { value: 'Religious O/L'},
    { value: 'English O/L'},
    { value: 'Sinhala O/L'},
    { value: 'Science O/L'},
    { value: 'ICT O/L'},
    { value: 'Mathematics O/L'},
    { value: 'Art O/L'},
    { value: 'Drama O/L'},
    { value: 'Dancing O/L'},
    { value: 'Music O/L'},

]

let year = [
    {value: 'Grade 6'},
    {value: 'Grade 7'},
    {value: 'Grade 8'},
    {value: 'Grade 9'},
    {value: 'Grade 10'},
    {value: 'Grade 11'},
    {value: 'Grade 12'},
    {value: 'Grade 13'},
]

let level = [
    {value: 'O/L'},
    {value: 'A/L'},
]

let rdobtn = [

    {value: 'Sinahala Medium'},
    {value: 'English Medium'},

]


const [value, onChangeText] = React.useState('');
const [valuepapers, onChangeTextdesc] = React.useState('');



    return(
        <View style={{ flex: 1 }}>
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
					Add Papers
				</Text>
			</View>



            <Dropdown
				style={{marginLeft: 20,
                    marginRight: 20,
                    marginTop: 50,
                    height: 60,}}
				label="Select Subject"
                data={data}
                
			/>
            


            <TextInput
				style={{
                    marginLeft: 20,
		            marginRight: 20,
		            marginTop: 20,
		            borderBottomColor: '#000000',
		            borderBottomWidth: 1,
		            height: 50,
		            borderColor: 'gray',
		            borderWidth: 1,
		            textAlign: 'center',
                }}
				onChangeText={(text) => onChangeText(text)}
				value={value}
				placeholder="Write here......"
			/>





            <TextInput
				style={{ marginLeft: 20,
		            marginRight: 20,
		            marginTop: 20,
		            borderBottomColor: '#000000',
		            borderBottomWidth: 1,
		            height: 200,
		            borderColor: 'gray',
		            borderWidth: 1,
		            textAlign: 'center',}}
                    onChangeText={(textdesc) => onChangeTextdesc(textdesc)}
				value={valuepapers}
				placeholder="Write here......"
				numberOfLines={2}
				multiline={false}
			/>


            {/* add upload element here */}
            







                <View 
                    style={{
						flex: 1,
					flexDirection: 'row',
                    flexGrow: 1,
                    justifyContent: "space-evenly",

                }}>

                        <Dropdown
				            style={{
                                
                                // marginLeft: 20,
                                // marginRight: 20,
                                marginTop: 50,
                                height: 50,
                                
                                
                            }}
				                label="Year"
                                data={year}
                                
			                />
                            

                        <Dropdown
				            style={{
                                // marginLeft: 20,
                                // marginRight: 20,
                                marginTop: 50,
                                height: 50,}}
				                label="Level"
				                data={level}
			                />

                </View>




                <View style={{
						flex: 1,
					flexDirection: 'row',
                    margin: 5,
                    flexGrow: 1,
                    justifyContent: "flex-end",
                }}>


                <TouchableOpacity
				style={{
                    flex: 0.5,
                    flexDirection: "row",
					maxHeight: 55,
					marginTop: 20,
					marginLeft: 20,
                    marginRight: 20,
                    justifyContent: "center",
                    alignContent: 'space-between',
				}}
				onPress={() => Alert.alert('Successfully submitted')}>
				<View
					style={{
                        flex: 1,
						backgroundColor: '#F7BE56',
						marginRight: 5,
                        alignItems: 'center',
                        
					}}>
                     <Entypo name="save" size={24} color="black" />   
					<Text style={{ color: '#f0f8ff', fontSize: 18, marginLeft: 20,
						fontSize: 19,
						fontWeight: 'bold', }}>
						Submit
					</Text>
				</View>
			</TouchableOpacity>
                
                    </View>



                    <View style={{
                        	flex: 1,
                            flexDirection: 'row',
                            flexGrow: 1,
                            justifyContent: "space-evenly",
                    }}>

                    <RadioButtonRN
                            data={rdobtn}
                            selectedBtn={(e) => console.log(e)}

                    />        

                    <RadioButtonRN
                            data={rdobtn}
                            selectedBtn={(e) => console.log(e)}

                    />        
                    </View>






        </View>
    );
}