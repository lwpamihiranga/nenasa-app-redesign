import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Image } from 'react-native';

export function EditProfile({navigation}){

    const [value, onChangeText] = React.useState('');
    const [value1, onChangeText1] = React.useState('');
    const [value2, onChangeText2] = React.useState('');
    const [value3, onChangeText3] = React.useState('');


    return(
        <View style={{ flex: 1, padding: 10 }}>

           
            <View
				style={{
					flex: 2,
					margin: 5,
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Image
					style={{
						width: 120,
						height: 120,
						borderRadius: 100,
					}}
					source={require('../assets/profile-pic.jpg')}
				/>
				<Text
					style={{ fontSize: 20, fontWeight: 'bold', marginTop: 5 }}>
					Missy Cooper
				</Text>
			</View>



                <View style={{
                        flex:1,
                        alignContent: 'space-between',
                             
                        }}>
                    <Text style={{ marginLeft: 20}}>
                        School University
                    </Text>
                    <TextInput
				        style={{
                                marginLeft: 20,
		                        marginRight: 20,
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
                </View>
            


                
                <View style={{
                        flex:1,
                        alignContent: 'space-between',
                             
                        }}>
                    <Text style={{ marginLeft: 20}}>
                        School University
                    </Text>
                    <TextInput
				        style={{
                                marginLeft: 20,
		                        marginRight: 20,
		                        borderBottomColor: '#000000',
		                        borderBottomWidth: 1,
		                        height: 50,
		                        borderColor: 'gray',
		                            borderWidth: 1,
		                        textAlign: 'center',
                                }}
				        onChangeText={(text) => onChangeText1(text)}
				        value={value1}
				        placeholder="Write here......"
			        />
                </View>






                <View style={{
                        flex:1,
                        alignContent: 'space-between',
                             
                        }}>
                    <Text style={{ marginLeft: 20}}>
                        School University
                    </Text>
                    <TextInput
				        style={{
                                marginLeft: 20,
		                        marginRight: 20,
		                        borderBottomColor: '#000000',
		                        borderBottomWidth: 1,
		                        height: 50,
		                        borderColor: 'gray',
		                            borderWidth: 1,
		                        textAlign: 'center',
                                }}
				        onChangeText={(text) => onChangeText2(text)}
				        value={value2}
				        placeholder="Write here......"
			        />
                </View>





                <View style={{
                        flex:1,
                        alignContent: 'space-between',
                             
                        }}>
                    <Text style={{ marginLeft: 20}}>
                        School University
                    </Text>
                    <TextInput
				        style={{
                                marginLeft: 20,
		                        marginRight: 20,
		                        borderBottomColor: '#000000',
		                        borderBottomWidth: 1,
		                        height: 50,
		                        borderColor: 'gray',
		                            borderWidth: 1,
		                        textAlign: 'center',
                                }}
				        onChangeText={(text) => onChangeText3(text)}
				        value={value3}
				        placeholder="Write here......"
			        />
                </View>



                <View style={{
						flex: 1,
					flexDirection: 'row',
                    flexGrow: 1,
                    justifyContent: "flex-end",
                }}>
                <TouchableOpacity
				style={{
                    flex: 0.5,
                    flexDirection: "row",
					maxHeight: 55,
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
                        alignItems: 'center',
                        
					}}>
					<Text style={{ color: '#000000', fontSize: 18, 
						fontSize: 19,
                        fontWeight: 'bold',
                        alignContent: 'center',
                        alignItems: 'center',
                        marginTop: 9,
                         }}>
						Update
					</Text>
				</View>
			</TouchableOpacity>
                
                    </View>





            


        </View>
    )
}