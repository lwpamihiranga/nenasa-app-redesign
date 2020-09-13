import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Header = ({ title }) => {
	return (
		<View style={styles.header}>
			<AntDesign
				name="left"
				size={30}
				color="black"
				style={styles.left}
			/>
			<Text style={styles.text}>{title}</Text>
		</View>
	);
};

// these don't change unless the server is started
Header.defaultProps = {
	title: 'Nenasa Education',
};

const styles = StyleSheet.create({
	header: {
		height: 70,
		paddingHorizontal: 10,
		paddingTop: 25,
		flexDirection: 'row',
		alignSelf: 'stretch',
	},
	left: {
		paddingTop: 3,
	},
	text: {
		width: '100%',
		flexDirection: 'row',
		color: 'black',
		fontSize: 23,
		fontWeight: 'bold',
		textAlign: 'center',
		paddingEnd: 55,
		paddingBottom: 10,
	},
});

export default Header;
