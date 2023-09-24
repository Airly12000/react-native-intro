import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	// Text,
	// View,
	SafeAreaView,
	Button,
	Alert,
	// Image,
	// TouchableWithoutFeedback,
	// TouchableOpacity,
	// TouchableHighlight,
	Platform,
	StatusBar,
	Dimensions,
	useWindowDimensions,
} from 'react-native';

import { useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
	// const handlePress = () => console.log('Text Clicked!');
	// const handlePress = () => alert('Button Tapped');
	const handlePress = () => {
		// Alert.alert('Hello', 'How are you?', [
		// 	{ text: 'Yes', onPress: () => console.log('Yes') },
		// 	{ text: 'No', onPress: () => console.log('No') },
		// ])
		Alert.prompt('Hello', 'How are you?', (text) => console.log(text)); // for input
	};

	// console.log(Dimensions.get('screen'));
	console.log(Dimensions.get('window'));
	console.log(useWindowDimensions());

	const orientation = useDeviceOrientation();

	return (
		<SafeAreaView style={styles.container}>
			<Button title='Click Me' onPress={handlePress} color='orange' />
		</SafeAreaView>
		// 	<View style={styles.container}>
		// 		<View style={styles.containerTwo} />
		// 		<View style={styles.containerThree} />
		// 		<View style={styles.containerFour} />
		// 		<View style={styles.containerTwo} />
		// 		<View style={styles.containerThree} />
		// 	</View>
		// <View style={styles.container}>
		// 	<Text>Hello World!</Text>
		// 	<Image source={require('./assets/icon.png')} height={10} width={10} />
		// </View>
		// <SafeAreaView style={styles.container}>
		// 	<Text>Hello World!</Text>
		// 	<Image source={require('./assets/favicon.png')} />
		// 	<TouchableWithoutFeedback onPress={handlePress} onLongPress={handlePress}>
		// 		<Image
		// 			blurRadius={10}
		// 			fadeDuration={1000} // Works only on android
		// 			source={{
		// 				uri: 'https://picsum.photos/200/300',
		// 				width: 100,
		// 				height: 200,
		// 			}}
		// 		/>
		// 	</TouchableWithoutFeedback>
		// 	<TouchableOpacity onPress={handlePress} onLongPress={handlePress}>
		// 		<Image
		// 			source={{
		// 				uri: 'https://picsum.photos/200/300',
		// 				width: 100,
		// 				height: 200,
		// 			}}
		// 		/>
		// 	</TouchableOpacity>
		// 	<TouchableHighlight onPress={handlePress} onLongPress={handlePress}>
		// 		<Image
		// 			source={{
		// 				uri: 'https://picsum.photos/200/300',
		// 				width: 100,
		// 				height: 200,
		// 			}}
		// 		/>
		// 	</TouchableHighlight>
		// </SafeAreaView>
		// <SafeAreaView style={styles.container}>
		// 	<Text numberOfLines={4}>
		// 		Hello there! Lorem ipsum dolor sit amet consectetur adipisicing elit.
		// 		Perspiciatis, sint, neque tempora exercitationem reprehenderit veritatis
		// 		cupiditate temporibus molestias ducimus voluptas maxime repellendus
		// 		unde? Quod quos facere accusantium natus magnam unde!
		// 	</Text>
		// 	<Text onPress={handlePress}>How are you?</Text>
		// 	<Text>How are you?</Text>
		// 	<Text>How are you?</Text>
		// 	<Text>How are you?</Text>
		// 	<StatusBar style='auto' />
		// </SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1, //Grow to fill screen
		backgroundColor: '#ccc',
		// alignItems: 'center',
		// justifyContent: 'center',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
		// borderWidth: 1 + 'px',
	},
	// container: {
	// 	backgroundColor: '#ccc',
	// 	flex: 1,
	// 	flexDirection: 'row',
	// 	justifyContent: 'center', // main
	// 	alignItems: 'center', // secondary
	// 	// flexWrap: 'wrap',
	// 	// alignContent: 'center', // has no effect if no-wrap
	// },
	// containerTwo: {
	// 	backgroundColor: 'dodgerblue',
	// 	// flex: 2,
	// 	height: 100,
	// 	width: 100,
	// 	// alignSelf: 'center',
	// 	// // flexBasis: 100,
	// 	// flexGrow: 1,
	// },
	// containerThree: {
	// 	backgroundColor: 'gold',
	// 	// flex: 1,
	// 	width: 100,
	// 	height: 100,
	// 	top: 20,
	// 	left: 20,
	// 	// position: 'absolute',
	// 	// height: 200,
	// },
	// containerFour: {
	// 	backgroundColor: 'tomato',
	// 	// flex: 1,
	// 	width: 100,
	// 	height: 100,
	// 	// height: 300,
	// 	// flexShrink: 1,
	// },
});
