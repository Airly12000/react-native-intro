import React from 'react';
import { StyleSheet, View, ImageBackground, Image, Text } from 'react-native';

function WelcomeScreen(props) {
	return (
		<ImageBackground
			source={require('../assets/background.jpg')}
			resizeMode='cover'
			style={styles.backgroundImage}>
			<View style={styles.logoText}>
				<Image source={require('../assets/logo-red.png')} style={styles.logo} />
				<Text>Sell What You Don't Need</Text>
			</View>
			<View style={styles.loginView}>
				<Text style={styles.text}>Login</Text>
			</View>
			<View style={styles.signUpView}>
				<Text style={styles.text}>Sign Up</Text>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingTop: 100,
	},
	logoText: {
		position: 'absolute',
		top: 70,
		alignItems: 'center',
	},
	logo: {
		height: 100,
		width: 100,
	},
	text: {
		fontWeight: 'bold',
		fontSize: 20,
	},
	loginView: {
		backgroundColor: '#fc5c65',
		height: 75,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	signUpView: {
		backgroundColor: '#4ECDC4',
		height: 75,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default WelcomeScreen;
