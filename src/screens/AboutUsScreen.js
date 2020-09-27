import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

export function AboutUsScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<ScrollView>
				<Text style={styles.text}>
					නැණස education application එක සකසා ඇත්තේ ශ්‍රි ලංකාවේ ඇති
					සියලුම අකාරයේ පාසල් මට්ටමේ, විශ්ව විද්‍යාල මට්ටමේ සහ අනෙකුත්
					පාඨමාලා වලට අදාළ විභාගයන් සහ ඇගයීම් කටයුතු සඳහා සහයක්
					ලබාගැනීමට අවශ්‍ය තාක්ෂණික පසුබිමක් සකසන application එකක්
					ලෙසින්ය{'\n'}
					{'\n'}
				</Text>
				<Text style={styles.text}>
					මෙහිදී ඔබට,{'\n'}
					{'\n'}
				</Text>
				<Text style={styles.text}>
					එක් එක් විෂයන්ට අදාළ පෙරහුරු ප්‍රශ්න පත්‍ර විභාග
					ප්‍රශ්නපත්‍ර සහ අනෙකුත් සියලුම අකාරයේ අධ්‍යාපනික ලේඛන
					පහසුවෙන් ලබා ගැනීමට සහ හුවමාරැ කරගැනීමට හැක.{'\n'}
					{'\n'}
				</Text>
				<Text style={styles.text}>
					මෙම app එක airvapps හි නිෂ්පාදනයක් වන අතර ඔබට app එක
					සම්බන්දයෙන් ඇති සියලුම ගැටළු airvapps facebook පිටුවටත්
					airvapps@gmail.com email ලිපිනියටත් එවිය හැක.{'\n'}
					{'\n'}
				</Text>
				<Text style={styles.text}>
					යම්කිසි විෂයක් හෝ නියමයක් සම්බන්දයෙන් ඇති ගැටළු ඉදිරිපත්
					කිරීමට හැකිය. එමගින් ඔබගේ අධ්‍යාපනික ගැටළු වලට කඩිනම්
					පිළිතුරු ලබාගත හැකිය.{'\n'}
					{'\n'}
				</Text>
				<Text style={styles.text}>
					ශ්‍රී ලංකාවේ අධ්‍යාපන ක්ෂේත්‍රය නැංවීමට ඔබත් දායක
					වන්න.Nenasa education application is developed to get
					technical support for any kind of exams, assignments, and
					any other educational purposes at the school level or
					university level in Sri Lanka.{'\n'}
					{'\n'}
				</Text>
				<Text style={styles.text}>
					As a pre-launch in this update, the application contains
					only a few subjects of AL and OL at the school level. in
					future updates, the app will include every type of subject.
					{'\n'}
					{'\n'}
				</Text>
				<Text style={styles.text}>
					you can easily find and share past papers, assignments,
					notes, and any other documents that education-related..
					{'\n'}
					{'\n'}
				</Text>
				<Text style={styles.text}>
					This app is developed and published by airvapps and if you
					have any suggestions you can contact us via airvapps
					Facebook page or airvapps@gmail our official email.{'\n'}
					{'\n'}
				</Text>
				<Text style={styles.text}>
					Support to develop Sri Lankan education.{'\n'}
					{'\n'}
				</Text>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		marginTop: 30,
		marginLeft: 20,
		marginRight: 20,
	},
	text: {
		fontSize: 16,
	},
});
