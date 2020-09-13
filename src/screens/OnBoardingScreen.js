import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

export function OnBoardingScreen({ navigation, ...props }) {
	return (
		<Onboarding
			onSkip={() => navigation.navigate('Home')}
			onDone={() => navigation.navigate('Home')}
			pages={[
				{
					backgroundColor: '#fff',
					image: (
						<Image
							style={{ width: 400, height: 500 }}
							source={require('../assets/homescreen.jpg')}
							resizeMode="contain"
						/>
					),
					title: 'Home Screen',
					subtitle: 'Select the Category from Home Screen',
				},
				{
					backgroundColor: '#fff',
					image: (
						<Image
							style={{ width: 400, height: 500 }}
							source={require('../assets/alsubjects.jpg')}
							resizeMode="contain"
						/>
					),
					title: 'A/L Subjects',
					subtitle: 'Select the Subject from the Subjects Screen',
				},
				{
					backgroundColor: '#fff',
					image: (
						<Image
							style={{ width: 400, height: 500 }}
							source={require('../assets/olsubjects.jpg')}
							resizeMode="contain"
						/>
					),
					title: 'O/L Subjects',
					subtitle: 'Select the Subject from the Subjects Screen',
				},
				{
					backgroundColor: '#fff',
					image: (
						<Image
							style={{ width: 400, height: 500 }}
							source={require('../assets/navigationdrawer.jpg')}
							resizeMode="contain"
						/>
					),
					title: 'Navigation Drawer',
					subtitle: 'Use the Side Navigation Drawer to Navigate',
				},
			]}
		/>
	);
}

const styles = StyleSheet.create({});
