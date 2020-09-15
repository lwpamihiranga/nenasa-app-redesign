import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { TestScreen } from '../screens/TestScreen';
import { OLSubjectsScreen } from '../screens/OLSubjectsScreen';
import { ALSubjectsScreen } from '../screens/ALSubjectsScreen';
import { SubjectQuestionsScreen } from '../screens/SubjectQuestionsScreen';
import { AskQuestionScreen } from '../screens/AskQuestionScreen';
import { AnswerQuestion } from '../screens/AnswerQuestion';
import { ExamScreen } from '../screens/ExamScreen';
import { OtherPages } from '../screens/OtherPages';
import { FaceExamPage1 } from '../screens/FaceExamPage1';
import { FaceExamPage2 } from '../screens/FaceExamPage2';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export function HomeStack({ navigation }) {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={HomeScreen}
				options={{
					headerLeft: () => {
						return (
							<Ionicons
								name="md-menu"
								size={30}
								color="black"
								onPress={() => navigation.openDrawer()}
							/>
						);
					},
					headerLeftContainerStyle: { paddingLeft: 10 },
					title: 'Nenasa Education',
				}}
			/>
			<Stack.Screen name="Test" component={TestScreen} />
			<Stack.Screen
				name="O/L Subjects"
				component={OLSubjectsScreen}
				options={{ headerTitleAlign: 'center' }}
			/>
			<Stack.Screen
				name="A/L Subjects"
				component={ALSubjectsScreen}
				options={{ headerTitleAlign: 'center' }}
			/>
			<Stack.Screen name="Other Courses" component={OtherPages} />
			<Stack.Screen
				name="SubjectQuestionsScreen"
				component={SubjectQuestionsScreen}
				options={{ title: 'Questions', headerTitleAlign: 'center' }}
			/>
			<Stack.Screen
				name="AskQuestionScreen"
				component={AskQuestionScreen}
			/>
			<Stack.Screen name="AnswerQuestion" component={AnswerQuestion} />
			<Stack.Screen
				name="ExamScreen"
				component={ExamScreen}
				options={{ title: 'Exams & Tests' }}
			/>
			<Stack.Screen name="FaceExamPage1" component={FaceExamPage1} />
			<Stack.Screen name="FaceExamPage2" component={FaceExamPage2} />
		</Stack.Navigator>
	);
}
