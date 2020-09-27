import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export function ProfileScreen({ navigation }) {
	return (
		<View style={{ flex: 1, backgroundColor: 'white', padding: 10 }}>
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
			<View
				style={{
					flex: 1,
					backgroundColor: '#F2F2F2',
					margin: 5,
					flexDirection: 'row',
				}}>
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Text style={{ fontSize: 30 }}>10</Text>
					<Text style={{ fontSize: 10 }}>Followers</Text>
				</View>
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
						borderLeftColor: 'black',
						borderLeftWidth: 0.5,
					}}>
					<Text style={{ fontSize: 30 }}>5</Text>
					<Text style={{ fontSize: 10 }}>Following</Text>
				</View>
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
						borderLeftColor: 'black',
						borderLeftWidth: 0.5,
					}}>
					<Text style={{ fontSize: 30 }}>25</Text>
					<Text style={{ fontSize: 10 }}>Asked</Text>
				</View>
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
						borderLeftColor: 'black',
						borderLeftWidth: 0.5,
					}}>
					<Text style={{ fontSize: 30 }}>50</Text>
					<Text style={{ fontSize: 10 }}>Answered</Text>
				</View>
			</View>
			<View
				style={{
					flex: 4,
					margin: 5,
					padding: 5,
				}}>
				<View
					style={{
						flex: 1,
						backgroundColor: '#F2F2F2',
						marginBottom: 5,
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Text style={{ flex: 3, paddingLeft: 25 }}>
						School/University
					</Text>
					<Text style={{ flex: 2 }}>Medford HS</Text>
				</View>
				<View
					style={{
						flex: 1,
						backgroundColor: '#F2F2F2',
						marginBottom: 5,
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Text style={{ flex: 3, paddingLeft: 25 }}>Grade/Year</Text>
					<Text style={{ flex: 2 }}>4</Text>
				</View>
				<View
					style={{
						flex: 1,
						backgroundColor: '#F2F2F2',
						marginBottom: 5,
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Text style={{ flex: 3, paddingLeft: 25 }}>Stream</Text>
					<Text style={{ flex: 2 }}>Science</Text>
				</View>
				<View
					style={{
						flex: 1,
						backgroundColor: '#F2F2F2',
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Text style={{ flex: 3, paddingLeft: 25 }}>Email</Text>
					<Text style={{ flex: 2 }}>missy@aol.com</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({});
