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
import RadioButtonRN from 'radio-buttons-react-native';
import { AntDesign } from '@expo/vector-icons'; 


export function FaceExamPage1({ navigation }) {
    const data = [
        {
            label: 'Cricket'
        },
        {
            label: 'Volley ball'
        },
        {
            label: 'Football'
        },
        {
            label: 'Hockey'
        },
        {
            label: 'Rugby'
        } 
        ];
	return (
		<View style={styles.container}>
			<Text style={{marginTop:30,textAlign:"center",fontSize:60,backgroundColor:'#d3d3d3'}}> 00 : 09: 12 </Text>
			<Text style={{marginTop:30,fontSize:25,marginLeft:20}}>What is the national sport of India?</Text>
            <RadioButtonRN
                style={{marginLeft:10,marginTop:30,marginRight:10}}
                data={data}
                selectedBtn={(e) => console.log(e)}
             />
             <TouchableOpacity
					style={{ flex: 1 }}
					onPress={() => navigation.navigate('')}>
					<View
						style={{
							flex: 1,
							backgroundColor: '#F7BE56',
							marginRight: 5,
							justifyContent: 'center',
                            alignItems: 'center',
                            maxWidth:100,
                            maxHeight:50,
                            marginTop:40,
                            marginLeft:300
						}}>
                             <AntDesign name="forward" size={24} color="black" />   
					</View>
				</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	
});
