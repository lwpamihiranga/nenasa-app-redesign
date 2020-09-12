import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export  function OLsubjectScreen() {
	return (



        <SafeAreaView style={{
            flex: 0.5,
            flexDirection: "row",
            justifyContent: "space-evenly",
            
        }}>

        <View style={styles.heading}>
            <MaterialIcons name="school" size={24} color="black" />
            <Text>Select Subject</Text>
        </View>  

        
        
		<TouchableOpacity style={styles.container}>
        <FontAwesome5 name="cross" size={24} color="black" />
		<Text>Religious</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.container}>
        <FontAwesome5 name="language" size={24} color="black" />
		<Text>English</Text>
		</TouchableOpacity>
		

        </SafeAreaView>



	);
}

const styles = StyleSheet.create({
	container: {
        flex: 0.45,
        backgroundColor: "yellow",
		alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
        width: 195,
        margin: 10,
        
    },
    heading:{
              flex:0.5,
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 20,
              marginBottom: 10,
    }
});